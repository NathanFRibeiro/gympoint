import * as Yup from 'yup';

import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';
import Queue from '../../lib/Queue';
import HelpOrderAnsweredMail from '../jobs/HelpOrderAnsweredMail';

class HelpOrderController {
  async index(req, res) {
    const condition = req.userID
      ? { answer: null }
      : { student_id: req.params.studentId };

    const orders = await HelpOrder.findAll({
      where: condition,
      order: [['created_at', 'DESC']],
      attributes: ['id', 'created_at', 'question', 'answer', 'answer_at'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(orders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validation fails',
      });
    }

    const { studentId: student_id } = req.params;
    const { question } = req.body;

    const studentExist = await Student.findByPk(student_id);

    if (!studentExist) {
      return res.status(400).json({ error: 'Student not found' });
    }

    const { id } = await HelpOrder.create({
      question,
      student_id,
    });

    return res.json({
      id,
      question,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validation fails',
      });
    }

    const { orderId } = req.params;
    const { answer } = req.body;

    const orderExist = await HelpOrder.findByPk(orderId);

    if (!orderExist) {
      return res.status(400).json({ error: 'Help order not found' });
    }

    const answer_at = new Date();

    await orderExist.update({
      answer,
      answer_at,
    });

    const { id, question, createdAt, student } = await HelpOrder.findByPk(
      orderId,
      {
        include: [
          {
            model: Student,
            as: 'student',
            attributes: ['id', 'name', 'email'],
          },
        ],
      }
    );

    await Queue.add(HelpOrderAnsweredMail.key, {
      student,
      question,
      answer,
    });

    return res.json({
      id,
      question,
      answer,
      answer_at,
      createdAt,
      student,
    });
  }
}

export default new HelpOrderController();
