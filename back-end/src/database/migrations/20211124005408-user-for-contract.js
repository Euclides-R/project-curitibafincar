'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("contracts", "users_id", {
    type: Sequelize.INTEGER,
    references: { model: 'users', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull:true
  }),
 
  down: (queryInterface) => queryInterface.removeColumn("contracts", "users_id")
};
