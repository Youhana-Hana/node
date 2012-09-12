var ejs  = require('ejs');

var routes = { };

routes.home = function(req, res) {
  res.render('login', {
  locals: {message: 'Welcome to EJS'}
  });
};

module.exports = routes;
