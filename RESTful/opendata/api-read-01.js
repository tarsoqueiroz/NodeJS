/**
 * Created by USER: tarso.
 * On         DATE: 16/03/17.
 * By         NAME: api-read-01.js.
 */

'use strict';

const cassandra = require('cassandra-driver');
const ksdraClient = new cassandra.Client({ contactPoints: ['172.17.0.1'], keyspace: 'da_sample' });

const qrySelect = 'SELECT * FROM people LIMIT 5';

ksdraClient.execute(qrySelect, { prepare: true, autoPage: true}, function (err, result) {
  if (err) {
     console.log(err);
   }
  console.log(result);
});
