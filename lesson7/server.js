/**
 * Created by potoc on 03.07.2017.
 */


var io = require('socket.io').listen(1337);

io.sockets.on('connection', function (socket) {
    console.log(socket);
    var name = socket.id;
    var time = now();
    socket.json.emit('connect', {name: name, 'time': time});
    socket.broadcast.json.emit('userConnected', {name: name, 'time': time});

    socket.on('message', function (msg) {
        socket.broadcast.json.emit('message', {name: name, 'time': now(), 'text': msg.text});
        socket.json.emit('message', {'name': name, 'time': now(), 'text': msg.text});
    });
});

function now() {
    return ((new Date()).toLocaleTimeString());
}