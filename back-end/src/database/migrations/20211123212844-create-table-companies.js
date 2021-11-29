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
      reason_social: Sequelize.STRING(100),
      cnpj: Sequelize.DECIMAL(100),
      email: Sequelize.STRING(100),
      interest_rate: Sequelize.DECIMAL(50),
      address: Sequelize.STRING(200),
    }),

  down: async (queryInterface) => queryInterface.dropTable("companies"),
};
