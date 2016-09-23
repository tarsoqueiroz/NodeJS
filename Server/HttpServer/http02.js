/**
 * Created by USER: tarso.
 * On         DATE: 16/08/16.
 * By         NAME: http02.js.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World in GET Method!');
});
app.post('/', function (req, res) {
  res.send('Hello World in POST Method!');
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});
