import { Op } from 'sequelize';
import { subDays, parseISO } from 'date-fns';

import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async index(req, res) {
    const checkins = await Checkin.findAll({
      where: {
        student_id: req.params.studentId,
      },
      order: [['created_at', 'DESC']],
      attributes: ['id', 'created_at'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'age'],
        },
      ],
    });

    return res.json(checkins);
  }

  async store(req, res) {
    const { studentId: student_id } = req.params;

    const studentExist = await Student.findByPk(student_id);

    if (!studentExist) {
      return res.status(400).json({ error: 'Student not found' });
    }

    const startWeek = subDays(new Date(), 7);

    const amountCheckins = await Checkin.findAndCountAll({
      where: {
        student_id,
        createdAt: {
          [Op.gte]: startWeek,
        },
      },
    });

    if (amountCheckins.count >= 5) {
      return res
        .status(400)
        .json({ error: 'You can check in only 5 times within 7 days' });
    }

    const { id, createdAt } = await Checkin.create({
      student_id,
    });

    return res.json({
      id,
      createdAt,
    });
  }
}

export default new CheckinController();
