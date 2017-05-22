/**
 * Created by USER: tarso.
 * On         DATE: 19/05/17.
 * By         NAME: singleproc.js.
 *
 * SOURCE - https://www.infoq.com/br/articles/nodejs-utilizando-modulo-de-cluster
 */

'use strict';

const http = require('http');
const port = process.env.PORT || 8888;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from Node.js process!\n');
}).listen(port);

console.log('Listening on port', port);
