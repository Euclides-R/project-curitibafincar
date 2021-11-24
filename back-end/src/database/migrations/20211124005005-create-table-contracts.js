"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("contracts", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      type_contract: {
        type: Sequelize.STRING(100),
        allowNull: false,
        defaultValue: "FINANCIMANTO",
      },
      amount_times: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      entry_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      installments_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("contracts"),
};
