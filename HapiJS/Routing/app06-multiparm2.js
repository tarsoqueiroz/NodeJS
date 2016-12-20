/**
 * Created by USER: tarso.
 * On         DATE: 20/12/16.
 * By         NAME: app05-multiparm
 *
 * Source: https://hapijs.com/tutorials/routing?lang=en_US
 */

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/hello/{user*2}',
  handler: function (request, reply) {
    const userParts = request.params.user.split('/');
    reply('Hello ' + encodeURIComponent(userParts[0]) + ' ' + encodeURIComponent(userParts[1]) + '!');
  }
});
server.route({
  method: 'GET',
  path: '/hello2/{name}/{surname}',
  handler: function (request, reply) {
    const name    = encodeURIComponent(request.params.name);
    const surname = encodeURIComponent(request.params.surname);
    reply('Hello2 ' + name + ' ' + surname + '!');
  }
});
server.route({
  method: 'GET',
  path: '/hello3/{name}/{surname?}',
  handler: function (request, reply) {
    const name    = encodeURIComponent(request.params.name);
    const surname = request.params.surname ? encodeURIComponent(request.params.surname) : 'surnameless';
    reply('Hello3 ' + name + ' ' + surname + '!');
  }
});

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
