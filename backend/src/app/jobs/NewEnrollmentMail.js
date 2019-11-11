import { format, parseISO } from 'date-fns';
import Mail from '../../lib/Mail';

class NewEnrollmentMail {
  get key() {
    return 'NewEnrollmentMail';
  }

  async handle({ data }) {
    const { studentExist, planExist, start_date, end_date, price } = data;

    await Mail.sendMail({
      to: `${studentExist.name} <${studentExist.email}>`,
      subject: 'New Enrollment',
      template: 'enrollment',
      context: {
        name: studentExist.name,
        planName: planExist.title,
        planPrice: parseFloat(planExist.price).toFixed(2),
        planDuration: planExist.duration,
        start_date: format(parseISO(start_date), "MMMM' 'dd', 'yyyy"),
        end_date: format(parseISO(end_date), "MMMM' 'dd', 'yyyy"),
        totalPrice: parseFloat(price).toFixed(2),
      },
    });
  }
}

export default new NewEnrollmentMail();
