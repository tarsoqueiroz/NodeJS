/**
 * Created by USER: tarso.
 * On         DATE: 14/12/16.
 * By         NAME: zkpeer-03-create_data.
 *
 * Source: https://github.com/alexguan/node-zookeeper-client
 */

'use strict';

var zookeeper = require('node-zookeeper-client');

var client = zookeeper.createClient('localhost:2181');
var path = process.argv[2];
var strData = process.argv[3];

client.once('connected', function () {
  console.log('Connected to the server.');

  client.create(path, new Buffer(strData), function (error) {
    if (error) {
      console.log('Failed to create node: %s due to: %s.', path, error);
    } else {
      console.log('Node: %s is successfully created.', path);
    }

    client.close();
  });
});

client.connect();
