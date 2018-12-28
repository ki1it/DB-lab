const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const User = sequelize.define('User', {
  Login: {
    type: Sequelize.TEXT,
  },
  Pass:{
    type: Sequelize.TEXT,
  },
  Role:{
    type: Sequelize.TEXT,
  }
});

module.exports = User;
