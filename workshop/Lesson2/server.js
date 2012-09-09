var express = require('express');
var routes = require('./routes.js');

var server = { };

server.app = express();

server.start = function() {
  server.app.get('/hello', routes.hello);
  server.app.get('/sumallnatural', routes.sumallnatural);
  server.app.listen(8090);
}

module.exports = server;
