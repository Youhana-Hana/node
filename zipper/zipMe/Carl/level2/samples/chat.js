var net = require('net');

var sockets = [];

var s = net.Server(function(socket) {
sockets.push(socket);
socket.on('data', function(data){
for(var index = 0; index < sockets.length; ++index)
sockets[index].write(data);
})

socket.on('end', function() {
var index = sockets.indexOf(socket);
sockets.delete(index);
});
});

s.listen(8000);