/**
 * Created by USER: tarso.
 * On         DATE: 07/03/17.
 * By         NAME: api.js.
 */

'use strict';

const cassandra = require('cassandra-driver');
const ksdraClient = new cassandra.Client({ contactPoints: ['172.17.0.1'], keyspace: 'da_sample' });

const qrySelect = 'SELECT * FROM names';
const qryCities = 'SELECT * FROM cities';
const qryOptions = { pageState : null, prepare : true, fetchSize :  5 };

const PORT = process.env.HTTPD_PORT || 8888;
const SERVER_NAME = process.env.HTTPD_SNAME || "DA API Server";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const jsonResponse = JSON.parse('{"status":{"code":0,"message":""},"meta":{"date":"","currentPage":null,"nextPage":null,"size":0},"data":""}');
var jsonPeople = JSON.parse('{}');

app.use(bodyParser.json());

app.get("/", function(req, res) {
  const dtDate   = new Date();
  var   jsonRoot = jsonResponse;

  jsonRoot.status.code = 200;
  jsonRoot.meta.date = dtDate.toISOString();
  jsonRoot.meta.currentPage = req.query.page || null;
  jsonRoot.meta.size = parseInt(req.query.size || '5');
  jsonRoot.data = 'DA Sample API is alive!';

  res.set("X-Powered-By", "DA-API Server");
  res.json(jsonRoot);
});

app.get("/cities", function (req, res) {
  const dtDate = new Date();
  var   jsonCities = jsonResponse;

  jsonCities.status.code = 200;
  jsonCities.meta.date = dtDate.toISOString();
  jsonCities.meta.currentPage = req.query.page || null;
  jsonCities.meta.size = parseInt(req.query.size || '50');
  jsonCities.data = [];

  qryOptions.pageState = jsonCities.meta.currentPage;
  qryOptions.fetchSize = jsonCities.meta.size;

  ksdraClient.eachRow(qryCities, null, qryOptions, function (n, row) {

    jsonCities.data.push(JSON.parse('{"id":"' + row.id + '","city":"' + row.city + '","country":"' + row.country + '","state":"' + row.state + '","zipcode":"' + row.zipcode + '"}'));

  }, function (err, result) {

    if (err) {
      console.log(err);
    }

    jsonCities.meta.nextPage = result.pageState;

    res.set("X-Powered-By", "DA-API Server");
    res.json(jsonCities);
  });

});

app.listen(PORT, function() {
  console.log('Running "%s" on http://localhost:%d started at %s', SERVER_NAME, PORT, Date());
});

module.exports = app;
