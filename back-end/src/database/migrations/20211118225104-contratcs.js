'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("constratcs", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    type_contratc: {
      type: Sequelize.STRING(100),
      allowNull: false,
      default: "user",
    },
    companies: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    amount_times: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    entry_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    installments_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
  }),

  down: (queryInterface) => queryInterface.dropTable("contratcs")
};
