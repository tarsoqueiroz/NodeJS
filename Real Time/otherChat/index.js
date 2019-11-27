var app  = require('express')();
var http = require('http').createServer(app);
var io   = require('socket.io')(http);

const PORT = process.env.HTTPD_PORT || 3000;

app.get('/about', (req, res) => {
  res.send('<h1>Hello socket.io world!!!</h1>');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  socket.on('chat message', msg => {
    console.log(`chat message: ${msg}`);
    io.emit('chat message', msg);
  });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT} at ${Date()}`);
});
