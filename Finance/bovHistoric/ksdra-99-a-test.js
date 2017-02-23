/**
 * Created by USER: tarso.
 * On         DATE: 23/02/17.
 * By         NAME: ksdra-99-a-test.js.
 */

'use strict';

const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['10.15.20.117'], keyspace: 'bovespa' });

const query = 'SELECT * FROM cotacoes';

client.execute(query, [ ])
  .then(result => console.log(result));
