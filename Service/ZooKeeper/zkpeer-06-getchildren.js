/**
 * Created by USER: tarso.
 * On         DATE: 14/12/16.
 * By         NAME: zkpeer-06-getchildren.
 *
 * Source: https://github.com/alexguan/node-zookeeper-client
 */

'use strict';

var zookeeper = require('node-zookeeper-client');

var client = zookeeper.createClient('localhost:2181');
var path = process.argv[2];

client.once('connected', function () {
  console.log('Connected to the server.');

  client.getChildren(path, function (error, children, stats) {
    if (error) {
      console.log(error.stack);
      return;
    }

    console.log('Children are: %j.', children);
  });

  client.close();
});

client.connect();
