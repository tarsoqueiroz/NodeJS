const express     = require('express');
const argon2i     = require('argon2-ffi');
const crypto      = require('crypto');
const bodyParser  = require('body-parser');

var app         = express();
var jsonParser  = bodyParser.json();

app.post('/signup', jsonParser, function(req, res) {
  if (!req.body) {
    return res.sendStatus(400);
  }

  crypto.randomBytes(32, function(err, salt) {
    if (err) {
      throw err;
    }
    argon2i.hash
    argon2i.hash(req.body.password, salt).then(hash => {
      console.log(hash);
      res.sendStatus(201);
    });
  });
});

app.listen(3000, function() {
  console.log("Listening on port 3000...");
});
