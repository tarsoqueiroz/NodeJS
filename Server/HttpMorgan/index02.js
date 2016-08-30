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

/**
 * Morgan in 'combined' mode
 */
app.use(function (request, response, next) {
  console.log('Morgan log for "combined", "common", "dev", "short", "tiny" and custom...');
  next();
});
app.use(morgan('combined'));
app.use(morgan('common'));
app.use(morgan('dev'));
app.use(morgan('short'));
app.use(morgan('tiny'));
app.use(morgan(':date[iso] :remote-addr :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))

/**
 * Root route
 */
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
