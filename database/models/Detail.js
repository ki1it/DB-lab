const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const Detail = sequelize.define('Detail', {
  Name: {
    type: Sequelize.STRING(500),
  },
  Type: {
    type: Sequelize.STRING(300),
  },
  Count: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Detail;
