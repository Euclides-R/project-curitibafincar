import Sequelize, { Model } from "sequelize";

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING(100),
        cnpj: Sequelize.DECIMAL(100),
        interest_rate: Sequelize.DECIMAL(50),
      },
      {
        sequelize,
        tableName: 'companies',
      }
    );

    return this;
  }
}

export default Company;
