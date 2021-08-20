let app = require('express')();
let http = require('http').Server(app);
// 初始化socket.io 的实例，然后监听connection 来接收sockets
const { Server } = require("socket.io");
const io = new Server(http);
let fs = require('fs');

// 
http.listen(3000);


io.on('connection', function(socket) {
    console.log('a user connected!');
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


http.listen(3002, function() {
    console.log('listening on *:3000');
});