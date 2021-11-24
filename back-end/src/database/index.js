<<<<<<< HEAD
import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Companie from "../app/models/Companie";
import testconnection from '../config/testconnection';
const models = [Companie];

=======
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Curso from '../app/models/Curso';
import Aluno from '../app/models/Aluno';
const models = [Curso,Aluno];
 
>>>>>>> f6956957a8ca98c41324c42ea2821a20c8719fdf
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
