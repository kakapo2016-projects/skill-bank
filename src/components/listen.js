var $ = require('jquery')
var request = require('superagent')

module.exports = $(document).ready(function (){
  $('#deletePerson').click(function (){
    console.log(this.id)
    request
      .del('http://localhost:3000/people' + this.id)
      .end(function () {

      })
  })
})

