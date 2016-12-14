/**
 * Created by USER: tarso.
 * On         DATE: 14/12/16.
 * By         NAME: zkpeer-04-exist.
 *
 * Source: https://github.com/alexguan/node-zookeeper-client
 */

'use strict';

var zookeeper = require('node-zookeeper-client');

var client = zookeeper.createClient('localhost:2181');
var path = process.argv[2];

client.once('connected', function () {
  console.log('Connected to the server.');

  client.exists(path, function (error, stat) {
    if (error) {
      console.log(error.stack);
      return;
    }

    if (stat) {
      console.log('Node exists.');
    } else {
      console.log('Node does not exist.');
    }
  });

  client.close();
});

client.connect();
