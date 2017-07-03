var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
    query = query.substring(4,query.length); 
    var time = new Date(query);
    if(pathname === '/api/parsetime') {
        var date = {
            "hour": time.getHours(),
            "minute": time.getMinutes(),
            "second": time.getSeconds()
        };
        response.end(JSON.stringify(date));
    }
    else if(pathname === '/api/unixtime') {
        var unix = {
            "unixtime": time.getTime()
        };
        response.end(JSON.stringify(unix));
    }
});
server.listen(process.argv[2]);