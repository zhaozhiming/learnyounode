var fs = require('fs');
var path = require('path');

module.exports = function (dir, extname, callback) {
    fs.readdir(dir, function(err, list) {
        if (err) {
            return callback(err);
        }

        result = [];
        list.forEach(function (file) {
            if(path.extname(file) === '.' + extname) {
                result.push(file);
            }
        });
        return callback(null, result);
    });
};

