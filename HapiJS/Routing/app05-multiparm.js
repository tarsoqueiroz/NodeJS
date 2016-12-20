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

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
