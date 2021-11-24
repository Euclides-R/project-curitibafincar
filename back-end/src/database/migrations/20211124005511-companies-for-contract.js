'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("contracts", "companies_id", {
    type: Sequelize.INTEGER,
    references: { model: 'companies', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull:true
  }),
 
  down: (queryInterface) => queryInterface.removeColumn("contracts", "companies_id")
};
