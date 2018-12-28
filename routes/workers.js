

var express = require('express')
var router = express.Router()
const Worker = require('../database/models/Worker')
const Sequelize = require('sequelize')
/* GET users listing. */
router.get('/', async function (req, res, next) {
  let clients = await Worker.findAll({
  })
    .catch((err) => {
      console.log(err)
    })
  res.render('clients', {
    clients:clients
  })
})

module.exports = router
