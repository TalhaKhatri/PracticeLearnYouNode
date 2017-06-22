mymodule = require('./mymodule.js');

var callback = function (err, data) {
    if(err) {
        console.error('ERROR!');
    }
    data.forEach(function(element) {
        console.log(element);
    }, this);
};

mymodule(process.argv[2],process.argv[3],callback);