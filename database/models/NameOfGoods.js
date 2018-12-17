const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const NameOfGoods = sequelize.define('NameOfGoods', {
  Name: {
    type: Sequelize.STRING(500)
  },
  Amount: {
    type: Sequelize.INTEGER
  },
});

module.exports = NameOfGoods;
