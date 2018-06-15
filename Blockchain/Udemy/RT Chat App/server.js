let mongo = require("mongodb").MongoClient;
let client = require("socket.io").listen(8080).sockets;

mongo.connect('mongodb://127.0.0.1/chat', function (err, db) {
  if (err) throw err;

  client.on('connection', function (socket) {

    var col = db.collection('messages');

    // Wait for input
    socket.on('input', function (data) {
      var name = data.name;
      var message = data.message;

      col.insert({name: name, message: message}, function () {
        console.log('Inserted');

      })
    })

  });
});