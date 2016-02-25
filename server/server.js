var express = require('express')
var exphbs  = require('express-handlebars')
var routes = require('./routes')
var path = require('path')

var app = express()
var path = require('path')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Routes being called from my routes.js
routes(app)

app.use(express.static(path.join(__dirname, '../public')))

app.listen(3000);
