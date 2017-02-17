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
const client = new cassandra.Client({ contactPoints: ['172.17.0.4', '172.17.0.5'], keyspace: 'demo' });

const query = 'SELECT * FROM names';

client.execute(query, { prepare: true }, function (err, result) {
  if (err) {
    throw err;
  }

//  console.log(result.rows);
  console.log('Raw result... (typeof: %s)', typeof(result));
  console.log(result);
  console.log('  Host response: %s', result.info.queriedHost);

  console.log('Raw result.rows... (typeof: %s)', typeof(result.rows));
  console.log(result.rows);

  console.log('Pretty result.rows[n]... (typeof: %s)', typeof(result.rows[0]));
  console.log('   qty: %d', result.rows.length);
  for (var nSxi = 0, len = result.rows.length; nSxi < len; nSxi++) {
    console.log('{ "id": %d, "name": "%s" }', result.rows[nSxi].id, result.rows[nSxi].name);
  }

  process.exit();
});

/*
client.execute(query, [ ], function(err, result) {
  assert.ifError(err);
  console.log('Result: ', result);
  // client.exit(0);
});
*/