'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("users",{
    id:{
      type: Sequelize.INTEGER,
      allowNull:false,
      autoIncrement: true,
      primaryKey:true
    },
    user_common: {
      type: Sequelize.STRING(100),
      allowNull: false,
      default: "user",
    },
    name:{
      type: Sequelize.STRING(100),
      allowNull:false
    },
    cpf: {
      type: Sequelize.INTEGER(20),
      allowNull: false
    },
    email:{
      type: Sequelize.STRING(100),
      allowNull: true
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
  }),

  down: (queryInterface) => queryInterface.dropTable("users")
};
