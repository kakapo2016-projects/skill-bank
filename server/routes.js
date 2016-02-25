'use strict'
var exphbs  = require('express-handlebars')
var fs = require('fs')
var path = require('path')

var dataPath = path.join(__dirname, '../data/db.json')


exports = module.exports = function (app) {
  app.get('/people', function (req, res) {
    fs.readFile(dataPath, 'utf8', function (err, data) {
      if (err) {
        reject (err)
      } else {
        var people = JSON.parse(data).people

        res.render('home', {people: people})
      }
    })
  })

  app.get('/create', function (req, res) {
    res.render('create')
  })

}


//GET / 
  //blank homepage
  // -> home -> with people

  // GET people/
    //  -> home -> with peoplw

// GET people/:id
 // -> profile.hNDLEBRS -> with a person 

// DELETE people/:id

// POST people/:id

// PUT people/:id
