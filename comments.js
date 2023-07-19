// create web server
var express = require('express');
var app = express();
// create web server
var server = require('http').createServer(app);
// create socket server
var io = require('socket.io')(server);
// create redis client
var redis = require('redis');
var redisClient = redis.createClient();
// subscribe to channel
redisClient.subscribe('message');

// when redis client receives message
redisClient.on('message', function(channel, message) {
  // emit message
  io.emit(channel, message);
});

// serve static files
app.use(express.static(__dirname + '/public'));

// start server
server.listen(3000, function() {
  console.log('Server listening on port 3000');
});