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
        defaultValue: "FINANCIMENTO",
      },
      amount_times: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      entry_date: {
        type: Sequelize.DATE,
        allowNull: false,
        // defaultValue: moment().add("days", 30).format("DD/MM/YYYY"),
      },
      installments_date: {
        type: Sequelize.DATE,
        allowNull: false,
        // defaultValue: moment().add("days", 60).format("DD/MM/YYYY"),
      },
      status: Sequelize.STRING(20),
      value: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("contracts"),
};
