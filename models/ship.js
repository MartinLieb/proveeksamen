'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ship = sequelize.define('Ship', {
    name: DataTypes.STRING,
    hjemhavn: DataTypes.STRING,
    kaldesignal: DataTypes.DOUBLE,
    mmsi_nummer: DataTypes.DOUBLE,
    anvendelse: DataTypes.STRING,
    brt_bt: DataTypes.DOUBLE,
    laengde: DataTypes.DOUBLE,
    max_om_bord: DataTypes.DOUBLE

  }, {});
  Ship.associate = function(models) {
    // associations can be defined here
  };
  return Ship;
};