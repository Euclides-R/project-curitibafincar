'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("companies", {
    id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement: true,
    allowNull:false
    },
    cnpj: Sequelize.INTEGER,
    name: Sequelize.STRING(100),
    interest_rate: Sequelize.INTEGER,
 }),
   
  down: (queryInterface) => queryInterface.dropTable("companies")
};
