/**
 * Created by USER: tarso.
 * On         DATE: 20/12/16.
 * By         NAME: app02-method.
 *
 * Source: https://hapijs.com/tutorials/routing?lang=en_US
 */

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: ['PUT', 'POST'],
  path: '/',
  handler: function (request, reply) {
    reply('Hello, HAPI world with POST or PUT methods!');
  }
});

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
