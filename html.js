//const http = require("http");
//http.createServer((_, res) => res.end("託管已就緒")).listen(8080)

var express = require('express');
var app = express();
var fs = require('fs');

function render(filename, params) {
  var data = fs.readFileSync(filename, 'utf8');
  for (var key in params) {
    data = data.replace('{' + key + '}', params[key]);
  }
  return data;
}

app.get('/', function (req, res) {
  res.send(render('index.html', {
    name: req.params.name
  }));
})

app.listen(8080, function () {
  console.log('機器人正在聆聽port 8080!')
})