/**
 * Created by USER: tarso.
 * On         DATE: 09/05/17.
 * By         NAME: app_01.js.
 */

'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<html><body>News</body></html>');
});

app.get('/tech', function(req, res) {
  res.send('<html><body>Technology</body></html>');
});

app.get('/iot', function(req, res) {
  res.send('<html><body>IoT</body></html>');
});

app.get('/bitcoin', function(req, res) {
  res.send('<html><body>Bitcoin</body></html>');
});

app.listen(3000, function () {

  console.log('Server running...');

});