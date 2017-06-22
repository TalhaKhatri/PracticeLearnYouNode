var bl = require('bl');
var http = require('http');
var array = [];
var count = 0;
http.get(process.argv[2], function(response) {
    response.on("error", function(err) {
        console.log(err);
    });
    response.setEncoding('utf8');
    response.pipe(bl(function (err, data) {
        array[0] = data.toString();
        count++;
        if(count === 3){
            array.forEach(function(element) {
                console.log(element);
            }, this);
        }
     }));
});
http.get(process.argv[3], function(response) {
    response.on("error", function(err) {
        console.log(err);
    });
    response.setEncoding('utf8');
    response.pipe(bl(function (err, data) {
        array[1] = data.toString();
        count++;
        if(count === 3){
            array.forEach(function(element) {
                console.log(element);
            }, this);
        }
     }));
});
http.get(process.argv[4], function(response) {
    response.on("error", function(err) {
        console.log(err);
    });
    response.setEncoding('utf8');
    response.pipe(bl(function (err, data) {
        array[2] = data.toString();
        count++;
        if(count === 3){
            array.forEach(function(element) {
                console.log(element);
            }, this);
        }
     }));
});
