var fs = require('fs');

if(process.argv[2] !== 'undefined'){
    var path = process.argv[2];
    var buffer = fs.readFileSync(path);
    var string = buffer.toString();
    var numberOfLines = string.split('\n').length - 1;
    console.log(numberOfLines);
} else {
    console.error('Pass the path to the file to be checked.')
}
    