/**
 * Created by USER: tarso.
 * On         DATE: 30/08/16.
 * By         NAME: index01.js.
 */

/**
 * Source: https://www.npmjs.com/package/morgan
 */

'use strict'

var express = require('express');
var morgan  = require('morgan');

var nPort   = 8080;

var app = express();

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send('hello, world!')
});

/**
 * THE MAIN LISTEN FUNCTION
 *
 */
app.listen(nPort, function (err) {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${nPort}`);
});
