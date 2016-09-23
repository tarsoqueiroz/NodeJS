/**
 * Created by USER: tarso.
 * On         DATE: 30/08/16.
 * By         NAME: index02.js.
 */

'use strict'

/**
 * Source: https://www.npmjs.com/package/diamondjs
 */

const Diamond = require('diamondjs');

const nPort = 8080;

const server = new Diamond();

/**
 * Calling Middleware
 */
server.use(function (req, res, next) {
  console.log('Middleware 1 called');
  next();
});
server.use(function (req, res, next) {
  console.log('Middleware 2 called');
  next();
});

server.get('/', function (req, res) {
  res.write('Hello world!');
});
server.get('/hello', function (req, res) {
  res.write('... world!');
});

server.start(nPort);
