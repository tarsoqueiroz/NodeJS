/**
 * Created by USER: tarso.
 * On         DATE: 19/05/17.
 * By         NAME: multiproc.js.
 *
 * SOURCE - https://www.infoq.com/br/articles/nodejs-utilizando-modulo-de-cluster
 */

'use strict';

const http = require('http');
const port = process.env.PORT || 8888;
const cluster = require('cluster');
const numCPUs = require('os').cpus().length * 2;

if (cluster.isMaster) {
  console.log('Master process is running');
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    console.log('Starting a new worker');
    cluster.fork();
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);

//    res.end('Hello from Node.js ' + (cluster.isMaster ? 'master' : 'child') + ' process!\n');
//    res.end(`Hello from Node.js ${cluster.isMaster ? 'master' : 'child'} process!\n`);
    res.end(`Hello from Node.js - I am the worker ${cluster.worker.id}\n`);
  }).listen(port);

  console.log('Listening on port', port);
}
