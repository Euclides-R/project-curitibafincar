import Sequelize, { Model } from "sequelize";

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
          primaryKey: true,
        },
        reason_social: Sequelize.STRING(100),
        cnpj: Sequelize.DECIMAL(100),
        email: Sequelize.STRING(100),
        interest_rate: Sequelize.DECIMAL(50),
        address: Sequelize.STRING(200),
      },
      {
        sequelize,
        tableName: "companies",
      }
    );

    return this;
  }
}

export default Company;
