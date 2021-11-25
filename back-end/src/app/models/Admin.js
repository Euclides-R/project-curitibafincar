import Sequelize, { Model } from "sequelize";

class Admin extends Model {
  static init(sequelize) {
    super.init(
      {
        user_common: Sequelize.STRING(100),
        name: Sequelize.STRING(100),
        cpf: Sequelize.DECIMAL(15),
        email: Sequelize.STRING(100),
        password: Sequelize.STRING(100),
      },
      {
        sequelize,
        tableName: "admins",
      }
    );

    return this;
  }
}

export default Admin;
