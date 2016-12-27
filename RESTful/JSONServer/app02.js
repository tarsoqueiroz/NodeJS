/**
 * Created by USER: tarso.
 * On         DATE: 27/12/16.
 * By         NAME: app02.js.
 *
 * Source: https://github.com/typicode/json-server
 */

'use strict';

var jsonServer  = require('json-server');
var server      = jsonServer.create();
var router      = jsonServer.router('dbGIC.json');
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3001, function () {
  console.log('JSON Server is running')
});
