/**
 * Created by USER: tarso.
 * On         DATE: 23/08/16.
 * By         NAME: route01.js.
 */

/**
 * Simples routes for test
 */

const express = require('express');
const app     = express();
const nPort   = 3333;

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
app.get('/', function (request, response) {
  response.json({
    "/ (root)": "GET method"
  });
});
app.post('/', function (request, response) {
  response.json({
    "/ (root)": "POST method"
  });
});
app.put('/', function (request, response) {
  response.json({
    "/ (root)": "PUT method"
  });
});
app.delete('/', function (request, response) {
  response.json({
    "/ (root)": "DELETE method"
  });
});

/**
 * /test route
 */
app.get('/test', function (request, response) {
  response.json({
    "/test": "GET method"
  });
});
app.post('/test', function (request, response) {
  response.json({
    "/test": "POST method"
  });
});

app.listen(nPort, function (err) {
  if (err) {
    return console.log('Something very bad happened', err);
  }

  console.log(`Magical listening server is happening on port ${nPort}`);
});
