import Sequelize, { Model } from "sequelize";

class Companies extends Model {
  static init(sequelize) {
    super.init(
      {
        cnpj: Sequelize.INTEGER(100),
        name: Sequelize.STRING(100),
        interest: Sequelize.STRING(100),
      },
      {
        sequelize,
        tableName: "companies",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Contract, {
      foreignKey: "contr_id",
      as: "contratc",
      s,
    });
  }
}

export default Companies;
