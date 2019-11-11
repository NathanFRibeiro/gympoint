import * as Yup from 'yup';
import { addMonths, parseISO } from 'date-fns';

import Enrollment from '../models/Enrollment';
import Student from '../models/Student';
import Plan from '../models/Plan';
import Queue from '../../lib/Queue';
import NewEnrollmentMail from '../jobs/NewEnrollmentMail';

class EnrollmentController {
  async index(req, res) {
    const enrollments = await Enrollment.findAll({
      where: {
        canceled_at: null,
      },
      order: ['start_date'],
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'age'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    return res.json(enrollments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { student_id, plan_id } = req.body;

    const studentExist = await Student.findByPk(student_id);

    if (!studentExist) {
      return res.status(400).json({ error: 'Student not found' });
    }

    const planExist = await Plan.findByPk(plan_id);

    if (!planExist) {
      return res.status(400).json({ error: 'Plan not found' });
    }

    const start_date = parseISO(req.body.start_date);
    const end_date = addMonths(start_date, planExist.duration);
    const price = planExist.price * planExist.duration;

    await Enrollment.create({
      start_date,
      plan_id,
      student_id,
      end_date,
      price,
    });

    await Queue.add(NewEnrollmentMail.key, {
      studentExist,
      planExist,
      start_date,
      end_date,
      price,
    });

    return res.json({
      start_date,
      end_date,
      price,
      plan: planExist,
      student: studentExist,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      plan_id: Yup.number(),
      start_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const { plan_id } = req.body;

    const enrollment = await Enrollment.findByPk(id);

    const start_date =
      req.body.start_date && req.body.start_date !== enrollment.start_date
        ? parseISO(req.body.start_date)
        : enrollment.start_date;

    let { end_date, price } = enrollment;

    if (plan_id && plan_id !== enrollment.plan_id) {
      const planExist = await Plan.findByPk(plan_id);
      if (!planExist) {
        return res.status(400).json({ error: 'Plan not found' });
      }

      end_date = addMonths(start_date, planExist.duration);
      price = planExist.price * planExist.duration;
    }

    await enrollment.update({
      ...req.body,
      end_date,
      price,
    });

    const { plan, student } = await Enrollment.findByPk(id, {
      include: [
        {
          model: Plan,
          as: 'plan',
          attributes: ['id', 'title', 'duration', 'price'],
        },
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'age', 'height', 'weight'],
        },
      ],
    });

    return res.json({
      id,
      start_date,
      end_date,
      price,
      plan,
      student,
    });
  }

  async delete(req, res) {
    const enrollment = await Enrollment.findByPk(req.params.id);

    enrollment.canceled_at = new Date();

    await enrollment.save();

    return res.json(enrollment);
  }
}

export default new EnrollmentController();
