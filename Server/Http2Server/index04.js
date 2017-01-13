/**
 * Created by USER: tarso.
 * On         DATE: 13/01/17.
 * By         NAME: index04.js.
 *
 * Source: https://webapplog.com/http2-node/
 */

'use strict';

const port = 3333;
const spdy = require('spdy');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const options = {
  key: fs.readFileSync(__dirname + '/server.key'),
  cert:  fs.readFileSync(__dirname + '/server.crt')
};

app.get('*', (req, res) => {
  res
    .status(200)
    .json({"message": 'ok', 'teste': 'OK motherfucker'});
});

spdy
  .createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
});
