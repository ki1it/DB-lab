const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const ServiceListBreakdown = sequelize.define('ServiceListBreakdown', {
  NumOfService: {
    type: Sequelize.INTEGER,
  }
});

module.exports = ServiceListBreakdown;