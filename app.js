var express = require('express');
var app = express();

app.use(express.static('./'));

var server = app.listen(1337, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});

var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.emit('hello', { message: 'hello'});
});
