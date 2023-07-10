const bodyParser = require('body-parser'),
    express = require('express'),
    http = require('http'),
    _ = require('lodash'),
    app = express(),
    server = http.createServer(app),
    { Server } = require("socket.io"),
    io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bank.html');
});

let client = {};

io.on('connection', (socket) => {
    client = socket;
    socket.on('/payment/status', (payload) => {
        console.log(payload);
        fetch('http://localhost:3000/payment/status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(response => {
            //
        }).catch(err => {
            //
        });
    });
});

app.use(bodyParser.json());

app.post('/payment/initiate', (req, res) => {
    if (_.isEmpty(client)) return;
    client.emit('/payment/initiate', req.body);
});

server.listen(4000, () => {
    console.log('listening on *:4000');
});