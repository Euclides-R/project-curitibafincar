import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Companie from "../app/models/Companie";
import testconnection from '../config/testconnection';
const models = [Companie];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection))
      // .map((model) => {
      //     if(model.associate) model.associate(this.connection.models);
      //     return model;
      // })
  }
}

export default new Database();
