import Sequelize, { Model } from "sequelize";

class Contract extends Model {
  static init(sequelize) {
    super.init(
      {
        type_contract: {
          type: Sequelize.STRING(100),
          allowNull: false,
          defaultValue: "FINANCIMANTO",
        },
        amount_times: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        entry_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        installments_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'contracts',
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
