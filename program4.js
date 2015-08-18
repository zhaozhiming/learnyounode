var fs = require('fs')

var lines = 0
function countLines(callback) {
    fs.readFile(process.argv[2], function(err, fileContent) {
        lines = fileContent.toString().split('\n').length - 1
        callback()
    })
}

function logLines() {
    console.log(lines)
}

countLines(logLines)


