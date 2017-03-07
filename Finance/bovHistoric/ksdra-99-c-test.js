/**
 * Created by USER: tarso.
 * On         DATE: 06/03/17.
 * By         NAME: ksdra-99-c-test.js.
 */

'use strict';

const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['10.15.20.117'], keyspace: 'bovespa' });

const query = 'DESCRIBE bovespa';

client.execute(query, [ ], { prepare: true })
  .then(result => console.log(result));
