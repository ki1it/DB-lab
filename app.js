var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
require('./database/lib/dbInit')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var wagonRouter = require('./routes/wagon')
var curwagonRouter = require('./routes/curwagon')
var clientRouter = require('./routes/client')
var usluguRouter = require('./routes/uslugi')
var polomkiRouter = require('./routes/polomki')
var clientsRouter = require('./routes/clients')
var skladRouter = require('./routes/sklad')
var zapchastiRouter = require('./routes/zapchasti')
var zadachiRouter = require('./routes/zadachi')
var workersRouter = require('./routes/workers')
var app = express();


const Breakdown  =  require('./database/models/Breakdown')
async function a (){
  await new Promise(done => setTimeout(done, 1000))
  let res = await Breakdown.findAll({
    where:{
      FrequencyMarker: true

    },
    limit:10
  })
  console.log(res)
}
a()
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/wagon', wagonRouter)
app.use('/curwagon', curwagonRouter)
app.use('/client', clientRouter)
app.use('/uslugi', usluguRouter)
app.use('/polomki', polomkiRouter)
app.use('/zapchasti', zapchastiRouter)
app.use('/clients', clientsRouter)
app.use('/sklad', skladRouter)
app.use('/zadachi', zadachiRouter)
app.use('/workers', workersRouter)


const NameOfGood = require('./database/models/NameOfGood')
const NameType = require('./database/models/NameType')
const NameStatus = require('./database/models/NameStatus')

app.use('/addsklad',async function (req, res) {
  let type = await  NameType.findOne({
    where:{Name: req.body.type}
  })
  await NameOfGood.create({
      Name: req.body.name,
      Amount: parseInt(req.body.col),
      Type: type.dataValues.id,
      Status: 1,
      Price: parseInt(req.body.price)
    }
  )
  res.redirect(req.headers.referer)
})

app.use('/updsklad',async function (req, res) {
  let num = await  NameOfGood.findOne({
    where:{id: req.body.id}
  })
  await NameOfGood.update({
      Amount: parseInt(req.body.col)+num.dataValues.Amount,

    },{where:{id:req.body.id}}
  )
  res.redirect(req.headers.referer)
})

app.use('/minsklad',async function (req, res) {
  let num = await  NameOfGood.findOne({
    where:{id: req.body.id}
  })
  await NameOfGood.update({
      Amount: num.dataValues.Amount - parseInt(req.body.col),

    },{where:{id:req.body.id}}
  )
  res.redirect(req.headers.referer)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
