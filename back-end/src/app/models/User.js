import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init({
      type_user: Sequelize.STRING(100),
      name: Sequelize.STRING(100),
      cpf: Sequelize.DECIMAL(15),
      email: Sequelize.STRING(100),
      password: Sequelize.STRING(100)
    },
    {
      sequelize,
      tableName: 'users',
    });

    return this;
  }
}

export default User;
