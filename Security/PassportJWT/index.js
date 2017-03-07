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
const auth = require("./auth.js")();
const app = express();

var dtDate = new Date();

app.use(bodyParser.json());
app.use(auth.initialize());

app.get("/", function(req, res) {
  res.json({
    status: "MyAPI is alive!",
    date: dtDate.toISOString()
  });
});

app.listen(PORT, function() {
  console.log('Running {%s} on {http://localhost:%d} started at %s', SERVER_NAME, PORT, Date());
});

module.exports = app;