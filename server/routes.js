'use strict'
var exphbs  = require('express-handlebars')

exports = module.exports = function (app) {
  app.get('/', function (req, res) {
    if (req.query) 
    res.render('home')
  })

  app.get('/create', function (req, res) {
    res.render('create')
  })

}
