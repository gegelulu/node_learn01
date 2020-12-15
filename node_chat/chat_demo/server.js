const io = require('socket.io')();

io.on('connection', function(socket) {
    console.log('a user connecting');
    socket.on("disconnect", function() {
        console.log('user disconnect')
        io.emit('offline', '')
    })
    io.emit('online', '')
})

exports.listen = function(server) { 
    io.listen(server);
}
// module.exports = io;