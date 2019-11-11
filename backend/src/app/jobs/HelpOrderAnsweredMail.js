import Mail from '../../lib/Mail';

class HelpOrderAnsweredMail {
  get key() {
    return 'HelpOrderAnsweredMail';
  }

  async handle({ data }) {
    const { student, question, answer } = data;

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Your question has been answered!',
      template: 'helporder',
      context: {
        name: student.name,
        question,
        answer,
      },
    });
  }
}

export default new HelpOrderAnsweredMail();
