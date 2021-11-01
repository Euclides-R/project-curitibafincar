'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("financings", {
    id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull:false
    },
    contract: {
    type: Sequelize.STRING(100),
    },
    amout_times: Sequelize.STRING(100),
    entry_date: Sequelize.DATE,
    installments_date: Sequelize.DATE
 }),
   
  down: (queryInterface) => queryInterface.dropTable("curso")
};
