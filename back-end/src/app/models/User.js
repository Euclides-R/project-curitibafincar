import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init({
      type_user: {
        type: Sequelize.STRING(100),
        allowNull: false,
        defaultValue: "user",
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'users',
    });

    return this;
  }
}

export default User;
