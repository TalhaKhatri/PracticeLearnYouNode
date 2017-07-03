var net = require('net');
var moment = require('moment');
var server = net.createServer(function(socket) {
    var date = new Date();
    socket.end(moment().format('YYYY-MM-DD hh:mm')+"\n");
});
server.listen(process.argv[2]);