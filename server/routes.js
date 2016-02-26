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

  app.delete('/people/:id', function (req, res) {
    // console.log("we are in routes")
    var id = req.params.id
    fs.readFile(dataPath, 'utf8', function (err, data) {
      if (err) {
        reject (err)
      } else {
        var peopleDelete = JSON.parse(data)
        var personForRemoval = {}
        // console.log(peopleDelete)
        var peopleDeletepeople = peopleDelete.people
        for (var i = 0; i < peopleDeletepeople.length; i++){
          if (peopleDeletepeople[i].id === id){
            // console.log("we are in iteration territory", i)
            peopleDelete.people.splice(i, 1)
            console.log(peopleDelete)
            var objectForDB = JSON.stringify(peopleDelete)
            // console.log(typeof objectForDB, objectForDB)
            fs.writeFile(dataPath, objectForDB, 'utf8', function(err){
                    if (err) {
        reject (err)
      } 
            })
          }
        }
      }
    res.render('home')
  })
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
