/**
 * Created by USER: tarso.
 * On         DATE: 16/08/16.
 * By         NAME: http03.js.
 */

const express = require('express');
const app = express();
const nPort = 3333;

app.get('/', function (request, response) {
  response.send('Hello 03 from Express!');
});

app.listen(nPort, function (err) {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${nPort}`);
});
