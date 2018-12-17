const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const Breakdown = sequelize.define('Breakdown', {
  Name: {
    type: Sequelize.STRING(500),
  }
});

module.exports = Breakdown;
