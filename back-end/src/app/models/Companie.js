import Sequelize, { Model } from "sequelize";

class Companie extends Model {
  static init(sequelize) {
    super.init(
      {
        namecompanie: Sequelize.STRING(100),
        cnpj: Sequelize.DECIMAL(100),
        interest_rate: Sequelize.DECIMAL(50),
      },
      {
        sequelize,
        tableName: "companies",
      }
    );

    return this;
  }
}

export default Companie
