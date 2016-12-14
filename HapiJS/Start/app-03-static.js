/**
 * Created by USER: tarso.
 * On         DATE: 14/12/16.
 * By         NAME: app-03-static.
 *
 * Source: https://hapijs.com/tutorials
 */

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, HAPI world!');
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    reply('HAPI Hello, ' + encodeURIComponent(request.params.name) + '!');
  }
});

server.register(require('inert'), (err) => {

  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
      reply.file('./hello.html');
    }
  });
});

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
