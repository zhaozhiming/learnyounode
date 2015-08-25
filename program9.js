var http = require('http');

for(var i = 2; i < 5; i++) {
  var result = [];
  http.get(process.argv[i], function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      result.push(data.toString());
    });
    response.on('error', console.error);
  });

  setTimeout(function() {
    console.log(result.join(''));
  }, i * 1000);
}

/* http.get(process.argv[3], function(response) { */
  // response.setEncoding('utf8');
  // response.on('data', function(data) {
    // result.push(data.toString());
    // console.log(data.toString());
  // });
  // response.on('error', console.error);
// });

// http.get(process.argv[4], function(response) {
  // response.setEncoding('utf8');
  // response.on('data', function(data) {
    // result.push(data.toString());
    // console.log(data.toString());
  // });
  // response.on('error', console.error);
/* }); */

/*whil e(result.length !== 3) { */
// }

