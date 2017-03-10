/**
 * Created by USER: tarso.
 * On         DATE: 07/03/17.
 * By         NAME: index.js.
 */

'use strict';

const PORT = process.env.HTTPD_PORT || 8888;
const SERVER_NAME = process.env.HTTPD_SNAME || "MyAPI Server";

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jwt-simple");
const auth = require("./auth.js")();
const users = require("./users.js");
const cfg = require("./config.js");
const app = express();

var dtDate = new Date();

app.use(bodyParser.json());
app.use(auth.initialize());

app.get("/", function(req, res) {
  console.log(req);
  res.json({
    status: "MyAPI is alive!",
    date: dtDate.toISOString()
  });
});

app.get("/user", auth.authenticate('jwt', cfg.jwtSession), function(req, res) {

  var jwtToken = jwt.decode(req.get('Authorization').split(' ')[1], cfg.jwtSecret);

  console.log(req.user);
  console.log(jwtToken);
  res.json(users[jwtToken.id]);
});

app.post("/token", function(req, res) {
//  console.log(req);
  if (req.body.email && req.body.password) {
    console.log('mandou mail e pass');
    var email = req.body.email;
    var password = req.body.password;
    var user = users.find(function(u) {
      return u.email === email && u.password === password;
    });
    console.log(email + ' ' + password);
    if (user) {
      var payload = {
//        id: user.id
        id: user.id,
        name: user.name,
        mail: user.email,
        date: dtDate.toISOString()
      };
      var token = jwt.encode(payload, cfg.jwtSecret);
      res.json({
        token: token
      });
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

app.listen(PORT, function() {
  console.log('Running {%s} on {http://localhost:%d} started at %s', SERVER_NAME, PORT, Date());
});

module.exports = app;
