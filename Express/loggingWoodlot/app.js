/**
 * Created by USER: tarso.
 * On         DATE: 19/05/17.
 * By         NAME: app.js.
 */

'use strict';

var express = require('express');
var app = express();
var woodlot = require('woodlot').middlewareLogger;

app.use(woodlot({
  streams: ['./app.log'],
  stdout: false,
  routes: {
    whitelist: ['/', '/log'],
    strictChecking: true
  },
  format: {
    type: 'json',
    options: {
      cookies: true,
      headers: true,
      spacing: 2,
      separator: '\n'
    }
  }
}));

/**
 * Routes
 */
app.get('/', function(req, res) {
  var dtDate = new Date();

//  woodlot.info('Current date of this request is ', dtDate);
//  woodlot.info('Current date of this request is ');
  console.log('/ at ', dtDate);

  return res.status(200).send({ url: '/', currentDate: dtDate });
});
app.get('/log', function(req, res) {
  var dtDate = new Date();

//  woodlot.info('Current date of this request is ', dtDate);
//  woodlot.info('Current date of this request is ');
  console.log('/log at ', dtDate);

  return res.status(200).send({ url: '/log', currentDate: dtDate });
});
app.get('/nolog', function(req, res) {
  var dtDate = new Date();

//  woodlot.info('Current date of this request is ', dtDate);
//  woodlot.info('Current date of this request is ');
  console.log('/nolog at ', dtDate);

  return res.status(200).send({ url: '/nolog', currentDate: dtDate });
});

/**
 * Main
 */
app.listen(8888, function () {

  console.log('Server running now...');

})