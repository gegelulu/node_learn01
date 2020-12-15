var socket = io();

socket.on('online', function() {
    showMsg(0);
})

socket.on('offline',function() {
    showMsg(1);
})