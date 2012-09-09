
var request = require('request');

function handle(url, process){

request(url, function (error, response, body) {
   process(error, body);
});

}

exports.handle = handle


