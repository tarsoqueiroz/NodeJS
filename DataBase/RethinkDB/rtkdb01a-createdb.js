/**
 * Created by USER: tarso.
 * On         DATE: 25/04/17.
 * By         NAME: rtkdb01a-createdb.
 */

'use strict';

const config = require('./rtkdb01.json');
const rtkdb = require('rethinkdb');

rtkdb.connect({host: config.host, port: config.port})
  .then(function (conn) {
    console.log('Connected to RethingDB...');
    conn.close(function (error) {
      if (error) {
        throw error;
      }
      else {
        console.log('Disconnected from RethingDB...');
      }
    })
  })
  .error(function (error) {
    throw error;
  });

