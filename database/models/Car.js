const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const  Car = sequelize.define('Car', {
  VIN: {
    type: Sequelize.INTEGER,
  },
  CarInSprFK: {
    type: Sequelize.INTEGER,
  },
  Year: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Car;
