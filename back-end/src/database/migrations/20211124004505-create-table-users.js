"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
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
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('users'),
};
