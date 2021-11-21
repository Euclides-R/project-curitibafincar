import Sequelize, { Model } from "sequelize";

class Users extends Model {
  static init(sequelize) {
    super.init(
      {
        type_user: Sequelize.STRING(100),
        name: Sequelize.STRING(100),
        cpf: Sequelize.INTEGER(20),
        email: Sequelize.STRING(100),
        password: Sequelize.STRING(100),
      },
      {
        sequelize,
        tableName: "users",
      }
    );
    return this;
  }

  //   static associate(models) {
  //     this.belongsTo(models.Contract, {
  //       foreignKey: "contr_id",
  //       as: "contratc",
  //     });
  //   }
}

export default Users;
