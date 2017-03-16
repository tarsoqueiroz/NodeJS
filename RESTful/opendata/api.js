/**
 * Created by USER: tarso.
 * On         DATE: 07/03/17.
 * By         NAME: api.js.
 */

'use strict';

const cassandra = require('cassandra-driver');
const ksdraClient = new cassandra.Client({ contactPoints: ['172.17.0.1'], keyspace: 'da_sample' });
const qrySelect = 'SELECT * FROM names';

const PORT = process.env.HTTPD_PORT || 8888;
const SERVER_NAME = process.env.HTTPD_SNAME || "DA API Server";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var jsonPeople = JSON.parse('{}');

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.set("X-Powered-By", "DA-API Server");
  res.set("Date", dtDate.toISOString());
  res.json({
    "status": "DA Sample API is alive!"
  });
});

app.get("/people", function (req, res) {
  res.set("X-Powered-By", "DA-API Server");
  res.set("Date", dtDate.toISOString());

})

app.listen(PORT, function() {
  console.log('Running "%s" on http://localhost:%d started at %s', SERVER_NAME, PORT, Date());
});

module.exports = app;
