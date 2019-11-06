import Sequelize from 'sequelize';
import User from '../app/models/User';
import databaseConfig from '../config/database';
import Student from '../app/models/Student';
import Plan from '../app/models/Plan';
import Enrollment from '../app/models/Enrollment';
import Checkin from '../app/models/Checkin';
import HelpOrder from '../app/models/HelpOrder';

const models = [User, Student, Plan, Enrollment, Checkin, HelpOrder];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));

    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}
export default new Database();
