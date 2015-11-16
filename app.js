var http = require('http');
var fs = require('fs');
var page = './index.html';

fs.readFile(page, function (err, data) {
  if (err) return console.error(err.message);

  http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  }).listen(1337, '127.0.0.1');
});
