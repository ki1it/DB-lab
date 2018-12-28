var express = require('express')
var router = express.Router()
const Client = require('../database/models/Client')
const User = require('../database/models/User')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  let clients = await Client.findAll({
    include: [{ model: User, as: 'User' }]
  })
  res.render('customers', {
    clients: clients
  })
})

module.exports = router
