var express = require('express');
var routes = require('./routes.js');

var server = { };

server.app = express();

server.start = function() {
  server.app.get('/', routes.home);
  server.app.set('view options', {layout: false});
  server.app.set('view engine', 'ejs');
  server.app.listen(8080);
}

module.exports = server;
