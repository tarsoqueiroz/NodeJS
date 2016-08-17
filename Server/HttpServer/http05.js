/**
 * Created by USER: tarso.
 * On         DATE: 17/08/16.
 * By         NAME: http05.js.
 *
 * Objective      : Test of error management
 */

const express = require('express');
const app     = express();
const nPort   = 3333;

app.use(function (request, response, next) {
  console.log('First middleware...');
  console.log(request.headers);
  next();
});

app.use(function (request, response, next) {
  console.log('Second middleware...');
  request.chance = Math.random();
  console.log(request.chance);
  next();
});

app.use(function (request, response, next) {
  console.log('Third middleware...');
  console.log(request.url);
  next();
});

app.get('/', function (request, response) {
  console.log('Root location');

  response.json({
    chance: request.chance,
    root: '/ - make no error',
    error: '/error - make error'
  });
});

app.get('/error', function (request, response) {
  console.log('"/error" location');
  throw new Error('ooopppsss...');
});

/**
 * The error handler function should be the last function added with app.use.
 * The error handler has a next callback - it can be used to chain multiple error handlers.
 */

app.use(function (err, request, response, next) {
  // log the error, for now just console.log
  console.log(err);
  response.status(500).send('Something broke!');
});

app.listen(nPort, function (err) {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${nPort}`);
});
