var http = require('http');

function start() {
function onRequest(req, resp)
{
	resp.writeHead(200, {'content_type' : 'text/plain'});
	resp.write("Hello world");
	resp.end("\n");
}

var server = http.createServer(onRequest);

server.listen(8000);

console.log('server started');
}

exports.start = start;