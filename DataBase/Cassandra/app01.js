/**
 * Created by USER: tarso.
 * On         DATE: 11/01/17.
 * By         NAME: app01.js.
 *
 * Source: https://github.com/datastax/nodejs-driver
 */

'use strict';

const assert = require('assert');

const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['172.17.0.7', '172.17.0.8'], keyspace: 'demo' });

const query = 'SELECT id, name FROM names';

client.execute(query, function (err, result) {
  if (err) {
    throw err;
  }

  for (var nSxi = 0, len = result.rows.length; nSxi < len; nSxi++) {
    console.log(result.rows[nSxi]);
  }
});

/*
client.execute(query, [ ], function(err, result) {
  assert.ifError(err);
  console.log('Result: ', result);
  // client.exit(0);
});
*/