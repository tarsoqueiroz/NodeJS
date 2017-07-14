/**
 * Created by USER: tarso.
 * On         DATE: 13/07/17.
 * By         NAME: visitorcounter.js.
 */

'use strict';

const http = require('http');
const settings = require('./config/settings');

let counter = 0;
http.createServer((req, res) => {
  res.end(JSON.stringify({
    counter: ++counter,
    pid: process.pid
  }));
}).listen(settings.port);
