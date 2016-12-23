/**
 * Created by USER: tarso.
 * On         DATE: 20/12/16.
 * By         NAME: app03-path
 *
 * Source: https://hapijs.com/tutorials/routing?lang=en_US
 */

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: ['GET'],
  path: '/',
  handler: function (request, reply) {
    console.log('Hello, HAPI world with GET method!');
    reply('Hello, HAPI world with GET method!');
  }
});
server.route({
  method: 'GET',
  path: '/{user}',
  handler: function (request, reply) {
    console.log('Root hello ' + encodeURIComponent(request.params.user) + '!');
    reply('Root hello ' + encodeURIComponent(request.params.user) + '!');
  }
});
server.route({
  method: ['PUT', 'POST'],
  path: '/',
  handler: function (request, reply) {
    console.log('Hello, HAPI world with POST or PUT methods!');
    reply('Hello, HAPI world with POST or PUT methods!');
  }
});
server.route({
  method: 'GET',
  path: '/hello/{user}',
  handler: function (request, reply) {
    console.log('Hello ' + encodeURIComponent(request.params.user) + '!');
    reply('Hello ' + encodeURIComponent(request.params.user) + '!');
  }
});

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
