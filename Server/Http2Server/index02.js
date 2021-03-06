/**
 * Created by USER: tarso.
 * On         DATE: 13/01/17.
 * By         NAME: index03.js.
 */

/**
 * Ref.: https://medium.com/@imjacobclark/http-2-with-node-js-85da17322812#.ahnzpycje
 */
'use strict';

const port = 3333;

let spdy = require('spdy'),
  fs = require('fs');

let options = {
  key: fs.readFileSync(__dirname + '/server.key'),
  cert: fs.readFileSync(__dirname + '/server.crt')
};

spdy.createServer(options, function(req, res) {
  console.log('ops...');
  res.writeHead(200);
  res.end('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Hello world</title></head><body><h1>Hello World</h1><p>Over HTTP/2</p></body></html>');
}).listen(port);
