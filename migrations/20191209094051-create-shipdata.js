'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shipdata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fart: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      kurs: {
        type: Sequelize.STRING,
        allowNull: true
      },
      gps_kord: {
        type: Sequelize.STRING,
        allowNull: true
      },
      vindretning: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      vindstyrke: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      temp: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      omdrejning: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shipdata');
  }
};