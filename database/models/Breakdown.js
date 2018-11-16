const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const Breakdown = sequelize.define('Breakdown', {
  Type: {
    type: Sequelize.STRING(300),
  },
  Often: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Breakdown;
