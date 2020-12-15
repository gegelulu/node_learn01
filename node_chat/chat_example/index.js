const { response } = require('express');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    // res.send('<h2>hello world</h2>')
});
//receive msg from client and send back to client
io.on('connection', function(socket){
    console.log('a user connected');
    
    socket.on('chat message', function(msg) {
        console.log("message:" + msg);
        //server response:send this msg to client
        io.emit("chat message",msg);
    })
    socket.on('disconnect', function(){
        console.log('user disconnected');
    })
})

http.listen(5000, function(){
    console.log('listening on *:5000')
})

