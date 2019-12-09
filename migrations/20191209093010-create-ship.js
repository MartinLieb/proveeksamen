'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      navn: {
        type: Sequelize.STRING
      },
      hjemhavn: {
        type: Sequelize.STRING,
        allowNull: true
      },
      kaldesignal: {
        type: Sequelize.STRING,
        allowNull: true
      },
      mmsi_nummer: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      anvendelse: {
        type: Sequelize.STRING,
        allowNull: true
      },
      brt_bt: {
        type: Sequelize.STRING,
        allowNull: true
      },
      laengde: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      max_om_bord: {
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
    return queryInterface.dropTable('Ships');
  }
};