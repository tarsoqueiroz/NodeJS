/**
 * Created by USER: tarso.
 * On         DATE: 13/07/17.
 * By         NAME: visitorcounter.js.
 */

'use strict';

const settings = require('./config/settings');

const cluster = require('cluster');
const http = require('http');
const redis = require('redis').createClient();

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
} else {
  http.createServer((req, res) => {
    redis.incr('counter', (error, data) => {
      res.end(JSON.stringify({server: "cluster", counter: data, pid: process.pid}));
    });
  }).listen(settings.port);
}
