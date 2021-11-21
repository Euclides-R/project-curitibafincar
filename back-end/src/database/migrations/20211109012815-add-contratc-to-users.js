'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("users", "contracts", {
    type: Sequelize.INTEGER,
    references: { model: 'users', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull:true
  }),
 
  down: (queryInterface) => queryInterface.removeColumn("users", "contratcs")
};