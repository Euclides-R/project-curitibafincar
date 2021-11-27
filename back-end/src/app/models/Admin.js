import Sequelize, { Model } from "sequelize";

class Admin extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        type_user: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "adm",
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        cpf: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(20),
          allowNull: true,
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
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
