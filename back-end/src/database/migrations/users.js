'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("users",{
    id:{
      type: Sequelize.INTEGER,
      allowNull:false,
      autoIncrement: true,
      primaryKey:true
    },
    name:{
      type: Sequelize.STRING(100),
      allowNull:false
    },
    cpf: {
      type: Sequelize.DATE,
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

  down: (queryInterface) => queryInterface.dropTable("users")
};
