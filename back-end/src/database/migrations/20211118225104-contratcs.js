"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("constratcs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type_contratc: {
        allowNull: false,
        default: "user",
        type: Sequelize.STRING(100),
      },
      companies: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      amount_times: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      entry_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      installments_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("contratcs"),
};
