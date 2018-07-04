/**
 * index.js
 *
 * Created by tarso on 03/07/18
 */

const HTTP_PORT = process.env.HTTP_PORT || 8443; // $ HTTP_PORT=8443 npm run dev

var express = require("express");
var bodyParser = require("body-parser");
var jwt = require("jwt-simple");
var auth = require("./auth.js")();
var users = require("./users.js");
var cfg = require("./config.js");
var app = express();

app.use(bodyParser.json());
app.use(auth.initialize());

app.get("/", function(req, res) {
  res.json({status: "My API is alive!"});
});

app.get("/user", auth.authenticate(), function(req, res) {
  console.log(req.user.id);
  res.json(users[req.user.id]);
});

app.post("/token", function(req, res) {
  if (req.body.email && req.body.password) {
    var email = req.body.email;
    var password = req.body.password;
    console.log(email);
    console.log(password);
    var user = users.find(function(u) {
      return u.email === email && u.password === password;
    });
    if (user) {
      var payload = { id: user.id, mail: user.email, name: user.name };
      var token = jwt.encode(payload, cfg.jwtSecret);
      res.json({token: token});
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

app.listen(HTTP_PORT, function() {
  console.log("My API is running...");
});

module.exports = app;
console.log('HTTP/2 Static Server running at https://ecelepar:%d', HTTP_PORT);