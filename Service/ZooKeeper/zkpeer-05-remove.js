/**
 * Created by USER: tarso.
 * On         DATE: 14/12/16.
 * By         NAME: zkpeer-05-remove.
 *
 * Source: https://github.com/alexguan/node-zookeeper-client
 */

'use strict';

var zookeeper = require('node-zookeeper-client');

var client = zookeeper.createClient('localhost:2181');
var path = process.argv[2];

client.once('connected', function () {
  console.log('Connected to the server.');

  client.remove(path, -1, function (error) {
    if (error) {
      console.log(error.stack);
      return;
    }

    console.log('Node is deleted.');
  });

  client.close();
});

client.connect();
