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
        status: Sequelize.STRING(20),
        value: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        }
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
          foreignKey: 'user_id',
          as: 'users',
      });
      this.belongsTo(models.Company, {
          foreignKey: 'company_id',
          as: 'companies',
      });
  }

}

export default Contract;
