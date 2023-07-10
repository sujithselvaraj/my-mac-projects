const bodyParser = require('body-parser'),
    express = require('express'),
    http = require('http'),
    _ = require('lodash'),
    app = express(),
    server = http.createServer(app),
    { Server } = require("socket.io"),
    io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/ecom.html');
});

let clients = [];

io.on('connection', (socket) => {
    clients.push(socket);
    socket.on('/payment/initiate', (payload) => {
        payload.client = socket.id;
        fetch('http://localhost:4000/payment/initiate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(response => {
            //
        }).catch(err => {
            socket.emit('/payment/status', { status: 'Failed' });
        });
    });
});

app.use(bodyParser.json());

app.post('/payment/status', (req, res) => {
    let client = _.find(clients, { id: req.body.client });
    if (_.isEmpty(client)) return;
    client.emit('/payment/status', { status: req.body.status });
    res.send({});
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});