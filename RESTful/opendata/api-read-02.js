/**
 * Created by USER: tarso.
 * On         DATE: 17/03/17.
 * By         NAME: api-read-02.js.
 */

'use strict';

const cassandra = require('cassandra-driver');
const ksdraClient = new cassandra.Client({ contactPoints: ['172.17.0.1'], keyspace: 'da_sample' });

const qrySelect = 'SELECT id, name FROM people';
//const qryOptions = { pageState : null, prepare : true, fetchSize :  5 };
const qryOptions = { pageState : null, prepare : true};

// page 0
//qryOptions.pageState = null;
// Next page
qryOptions.pageState = '2433373862376636332d643232642d343735612d623161342d39333662303366363434633500f07ffffffa00';

ksdraClient.eachRow(qrySelect, null, qryOptions, function (n, row) {

  console.log(n + ' - ' + row.id + ': ' + row.name);

}, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('pageState: ' + result.pageState);
});
