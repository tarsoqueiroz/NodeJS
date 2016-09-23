/**
 * Created by USER: tarso.
 * On         DATE: 17/08/16.
 * By         NAME: http04.js.
 *
 * Objective      : Test of middleware
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
    chance: request.chance
  });
});

app.get('/test', function (request, response) {
  console.log('"/test" location');
  response.json({
    chance: request.chance
  });
});

app.listen(nPort, function (err) {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${nPort}`);
});
