var express = require('express')
var router = express.Router()
const User = require('../database/models/User')
const Girl = require('../database/models/Girl')
const GirlPhoto = require('../database/models/GirlPhoto')
const Sequelize = require('sequelize')
/* GET users listing. */
router.get('/', async function (req, res, next) {
  let girls = await Girl.findAll({
    include: [{ model: User, as: 'User' }]
  })
    .catch((err) => {
      console.log(err)
    })
  res.render('models', {
    girls: girls
  })
})

module.exports = router
