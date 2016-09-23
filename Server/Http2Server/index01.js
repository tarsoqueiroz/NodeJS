/**
 * Created by USER: tarso.
 * On         DATE: 22/08/16.
 * By         NAME: index.js.
 */

/**
 * Ref.: http://webapplog.com/http2-node/
 */
'use strict';

const port = 3333;
const spdy = require('spdy');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('*', function (req, res) {
  res
    .status(200)
    .json({message: 'ok'})
});

const options = {
  key:  fs.readFileSync(__dirname + '/server.key'),
  cert: fs.readFileSync(__dirname + '/server.crt')
};

spdy
  .createServer(options, app)
  .listen(port, function (error) {
    if (error) {
      console.error(error);
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.');
  }
});
