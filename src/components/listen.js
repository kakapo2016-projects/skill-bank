var $ = require('jquery')
var request = require('superagent')

function listenFunction() {
    $(document).ready(function (){
    $('.deletePerson').click(function (){
      console.log("we are in listen")
      request
        .del('http://localhost:3000/people/' + this.id)
        .end(function (err, res) {
          if (err){
            console.log("listen", err)
          }
        })
    })
  })
}

module.exports=listenFunction