"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable("companies", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING(100),
      cnpj: Sequelize.DECIMAL(100),
      interest_rate: Sequelize.DECIMAL(50),
    }),

  down: async (queryInterface) => queryInterface.dropTable("companies"),
};
