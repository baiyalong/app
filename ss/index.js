var express = require('express')
var port = require('./config').port
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})