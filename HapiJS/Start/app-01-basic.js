/**
 * Created by USER: tarso.
 * On         DATE: 14/12/16.
 * By         NAME: app-01-basic.
 *
 * Source: https://hapijs.com/tutorials
 */

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});