/**
 * Created by USER: tarso.
 * On         DATE: 23/12/16.
 * By         NAME: app01.js.
 *
 * Source: https://github.com/typicode/json-server
 */

'use strict';

var jsonServer  = require('json-server');
var server      = jsonServer.create();
var router      = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, function () {
  console.log('JSON Server is running')
});
