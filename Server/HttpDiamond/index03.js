/**
 * Created by USER: tarso.
 * On         DATE: 30/08/16.
 * By         NAME: index03.js.
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
  console.log('Middleware called');
  next();
});

server.get('/', function (req, res) {
  res.write('Path /basic, /short and /mix with GET, POST, PUT, PATCH e DELETE');
});

/**
 * BASIC route format
 */
server.route('GET', '/basic', function (req, res) {
  res.write('GET in /basic (basic format)');
});
server.route('POST', '/basic', function (req, res) {
  res.write('POST in /basic (basic format)');
});
server.route('PUT', '/basic', function (req, res) {
  res.write('PUT in /basic (basic format)');
});
server.route('PATCH', '/basic', function (req, res) {
  res.write('PATCH in /basic (basic format)');
});
server.route('DELETE', '/basic', function (req, res) {
  res.write('DELETE in /basic (basic format)');
});

/**
 * BASIC SHORT route format
 */
server.get('/short', function (req, res) {
  res.write('GET in /short (short format)');
});
server.post('/short', function (req, res) {
  res.write('POST in /short (short format)');
});
server.put('/short', function (req, res) {
  res.write('PUT in /short (short format)');
});
server.patch('/short', function (req, res) {
  res.write('PATCH in /basic (short format)');
});
server.delete('/short', function (req, res) {
  res.write('DELETE in /short (short format)');
});

/**
 * BASIC SHORT route format
 */
server.route('GET', '/mix', function (req, res) {
  res.write('GET in /mix (basic format)');
});
server.post('/mix', function (req, res) {
  res.write('POST in /mix (short format)');
});
server.route('PUT', '/mix', function (req, res) {
  res.write('PUT in /mix (basic format)');
});
server.patch('/mix', function (req, res) {
  res.write('PATCH in /mix (short format)');
});
server.route('DELETE', '/mix', function (req, res) {
  res.write('DELETE in /mix (basic format)');
});

server.start(nPort);
