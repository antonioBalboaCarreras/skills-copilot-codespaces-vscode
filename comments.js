// crear servidor web
const express = require('express');
const app = express();
const port = 3000;

// crear servidor de socket
const http = require('http');
const server = http.createServer(app);

// crear servidor de socket
const socketIO = require('socket.io');
const io = socketIO.listen(server);

// crear servidor de socket
io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('newMessage', (message) => {
        console.log(message);
        io.emit('newMessage', message);
    });
});

// cargar la libreria de socket
app.use(express.static(__dirname + '/node_modules/socket.io-client/dist'));

// cargar la libreria de socket
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// cargar la libreria de socket
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});