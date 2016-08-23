/**
 * Created by USER: tarso.
 * On         DATE: 23/08/16.
 * By         NAME: route03.js.
 */
'use strict';

/**
 * Simples routes for test
 */

const express     = require('express');
const app         = express();
const root        = require('./route03_root');
const test        = require('./route03_test');
const nPort       = 3333;

/**
 * Middleware for LOG and Statistics
 */

app.use(function (request, response, next) {
  console.log('*** LOG middleware ***');
  console.log(request.url);
  next();
});

app.use(function (request, response, next) {
  console.log('*** Statistics middleware ***');
  console.log(request.headers['user-agent']);
  next();
});

/**
 * Root routes
 */
app.use('/', root);

/**
 * /test route
 */
app.use('/test', test);

app.listen(nPort, function (err) {
  if (err) {
    return console.log('Something very bad happened', err);
  }

  console.log(`Magical listening server is happening on port ${nPort}`);
});
