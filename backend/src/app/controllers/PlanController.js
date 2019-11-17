import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const plan = await Plan.findAll({
      where: {
        canceled_at: null,
      },
      order: ['duration'],
    });

    return res.json(plan);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validation fails',
      });
    }

    const planExists = await Plan.findOne({
      where: { title: req.body.title, canceled_at: null },
    });

    if (planExists) {
      return res.status(400).json({ error: 'Plan already exists' });
    }

    const { title, duration, price } = await Plan.create(req.body);

    return res.json({
      title,
      duration,
      price,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validation fails',
      });
    }

    const { id: id_plan } = req.params;

    const plan = await Plan.findByPk(id_plan);

    const { title } = req.body;

    if (title !== Plan.title) {
      const planExists = await Plan.findOne({
        where: { title, canceled_at: null },
      });

      if (planExists) {
        return res.status(400).json({
          error: 'Plan already exists.',
        });
      }
    }

    const { duration, price } = await plan.update(req.body);

    return res.json({
      title,
      duration,
      price,
    });
  }

  async delete(req, res) {
    const plan = await Plan.findByPk(req.params.id);

    plan.canceled_at = new Date();

    await plan.save();

    return res.json(plan);
  }
}

export default new PlanController();
