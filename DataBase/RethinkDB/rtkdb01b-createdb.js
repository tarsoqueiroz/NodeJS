/**
 * Created by USER: tarso.
 * On         DATE: 05/05/17.
 * By         NAME: rtkdb01b-createdb.
 */

'use strict';

const config = require('./rtkdb01.json');
const rtkdb = require('rethinkdb');

let promisseRtkdb = rtkdb.connect({host: config.host, port: config.port})
let connRtkdb = null

promisseRtkdb
  .then(function (conn) {
    console.log('Connected to RethinkDB...');
    connRtkdb = conn;

    connRtkdb.close(function (error) {
      if (error) {
        throw error;
      }
      else {
        console.log('Disconnected from RethinkDB...');
      }
    })
  })
  .error(function (error) {
    throw error;
  });
