/**
 * wsserver.js
 *
 * Created by tarso on 15/06/18
 */

const WebSocket = require('ws');
const wss = new WebSocket.Server({
  port: 12345,
});

function broadcast (data) {
  wss.clients.forEach(ws => {
    ws.send(data);
  });
}

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('received: %s', message);
    broadcast(message);
  });

//  ws.send('something');
});