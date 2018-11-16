const sequelize = require('../lib/pgbaseConnector');
const Sequelize = require('sequelize');
const Worker = sequelize.define('Worker', {
  FirstName: {
    type: Sequelize.STRING(300),
  },
  SecondName: {
    type: Sequelize.STRING(300),
  },
  Patronymic: {
    type: Sequelize.STRING(300),
  },
  Birthday:{
    type: Sequelize.DATE,
  },
  Position: {
    type:   Sequelize.ENUM,
    values: ['Administrator', 'Inspector', 'Repairer', 'Storekeeper', 'Manager', 'Director']
  }
});

module.exports = Worker;
