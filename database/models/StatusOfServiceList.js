const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const ServiceListBreakdown = sequelize.define('ServiceListBreakdown', {
  Name: {
    type: Sequelize.STRING(500),
  }
});

module.exports = ServiceListBreakdown;
