var bl = require('bl');
var http = require('http');
var array = [];
var count = 0;
for (var i = 0; i < process.argv.length-2; i++) {
    http.get(process.argv[i+2], function(response) {
        response.on("error", function(err) {
            console.log(err);
        });
        response.setEncoding('utf8');
        response.pipe(bl(function (err, data) {
            array[i] = data.toString();
            count++;
            if(count === array.length){
                array.forEach(function(element) {
                    console.log(element);
                }, this);
            }
        }));
    });
}
