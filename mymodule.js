var fs = require('fs');

module.exports = function (directory_name, ext, callback) {
    fs.readdir(directory_name, function(err, data) {
        if(err){
            return callback(err);
        }
        data = data.filter(function(el){
            return el.endsWith('.'+ext);
        });
        callback(null, data);
    });
};