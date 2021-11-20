'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("admins",{
    id:{
      type: Sequelize.INTEGER,
      allowNull:false,
      autoIncrement: true,
      primaryKey:true
    },
    user_common: {
      type: Sequelize.STRING,
      allowNull: false,
      default: "admin",
    },
    name:{
      type: Sequelize.STRING(100),
      allowNull:false
    },
    cpf: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    email:{
      type: Sequelize.STRING(20),
      allowNull: true
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
  }),

  down: (queryInterface) => queryInterface.dropTable("admins")
};
