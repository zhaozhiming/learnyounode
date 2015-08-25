var http = require('http');
var bl = require('bl');

var result = [];
var count = 0;

function printResult() {
  for(var i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[index + 2], function(response) {
    response.pipe(bl(function(err, data) {
      if (err) return console.error(err);

      result[index] = data.toString();
      count++;

      if(count === 3) {
        printResult();
      }
    }));
    response.on('error', console.error);
  });
}

for(var i = 0; i < 3; i++) {
  httpGet(i);
}
