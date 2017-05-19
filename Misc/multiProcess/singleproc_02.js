/**
 * Created by USER: tarso.
 * On         DATE: 19/05/17.
 * By         NAME: singleproc.js.
 */

'use strict';

const http = require('http');
const port = process.env.PORT || 8888;
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from Node.js', (cluster.isMaster ? 'master' : 'child'),' process!\n');
}).listen(port);

console.log('Listening on port', port);
