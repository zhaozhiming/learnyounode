var listfile = require('./listfile.js');

listfile(process.argv[2], process.argv[3], function(err, data) {
    if (err) {
        consol.log(err);
    }

    data.forEach(function(file) {
        console.log(file);
    });
});
