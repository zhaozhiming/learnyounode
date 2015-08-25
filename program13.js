var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  if (req.method !== 'GET') return res.end('send me a GET request.');

  var url_param = url.parse(req.url, true);
  var date = new Date(url_param.query.iso);
  res.writeHead(200, {'Content-Type': 'application/json'});
  if (url_param.pathname === '/api/parsetime') {
    res.end(JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}));
  }

  if (url_param.pathname === '/api/unixtime') {
    res.end(JSON.stringify({unixtime: date.getTime()}));
  }
});

server.listen(process.argv[2]);
