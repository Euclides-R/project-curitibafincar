"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("admins", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      type_user: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "adm",
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("admins"),
};
