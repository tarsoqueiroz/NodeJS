/**
 * Created by USER: tarso.
 * On         DATE: 07/03/17.
 * By         NAME: api.js.
 */

'use strict';

const PORT = process.env.HTTPD_PORT || 8888;
const SERVER_NAME = process.env.HTTPD_SNAME || "DA API Server";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.json({
    status: "DA API is alive!"
  });
});

app.listen(PORT, function() {
  console.log('Running "%s" on http://localhost:%d started at %s', SERVER_NAME, PORT, Date());
});

module.exports = app;
