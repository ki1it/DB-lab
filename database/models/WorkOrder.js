const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const WorkOrder = sequelize.define('WorkOrder', {
  Status: {
    type: Sequelize.BIGINT
  },
  Date: {
    type: Sequelize.DATE,
  },
  Description: {
    type: Sequelize.STRING(3000),
  },
  Comment: {
    type: Sequelize.STRING(3000),
  },
});

module.exports = WorkOrder;
