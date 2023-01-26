var WebSocketServer = require('ws').Server;

var clients = [];
var socket = new WebSocketServer({
  port: 8082
});

socket.on('connection', function(connection) {
 console.log("connected");
  clients.push(connection);

  connection.on('message', function(message) {
    //broadcast the message to all the clients
    clients.forEach(function(client) {
        // console.log(client);
      client.send(message.toString());
    });
  });
});