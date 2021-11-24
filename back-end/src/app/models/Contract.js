import Sequelize, { Model } from "sequelize";

class Contract extends Model {
  static init(sequelize) {
    super.init(
      {
        type_contract: Sequelize.STRING(100),
        amount_time: Sequelize.INTEGER,
        entry_date: Sequelize.DATE,
        installments_rate: Sequelize.DATE,
      },
      {
        sequelize,
        tableName: "contracts",
      }
    );

    return this;
  }

  static associate(models) {
      this.belongsTo(models.User, {
          foreignKey: 'users_id',
          as: 'users',
      });
      this.belongsTo(models.Companie, {
          foreignKey: 'companie_id',
          as: 'companies',
      });
  }

}

export default Contract;
