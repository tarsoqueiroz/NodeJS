/**
 * Created by USER: tarso.
 * On         DATE: 13/07/17.
 * By         NAME: visitorcounter.js.
 */

'use strict';

const settings = require('./config/settings');
const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
} else {
  let counter = 0;
  http.createServer((req, res) => {
    res.end(JSON.stringify({
      counter: ++counter,
      pid: process.pid
    }));
  }).listen(settings.port);
}
