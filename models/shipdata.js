'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shipdata = sequelize.define('Shipdata', {
    fart: DataTypes.STRING
  }, {});
  Shipdata.associate = function(models) {
    // associations can be defined here
  };
  return Shipdata;
};