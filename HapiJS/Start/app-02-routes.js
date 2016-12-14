/**
 * Created by USER: tarso.
 * On         DATE: 14/12/16.
 * By         NAME: app-02-routes.
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

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
