/**
 * Created by USER: tarso.
 * On         DATE: 17/03/17.
 * By         NAME: api-carga-02.js.
 */

'use strict';

const cassandra = require('cassandra-driver');
const ksdraClient = new cassandra.Client({ contactPoints: ['172.17.0.1'], keyspace: 'da_sample' });

//const qrySelect = 'SELECT * FROM names';
const qryInsert = 'INSERT INTO da_sample.cities (id, city, state, country, zipcode) VALUES (?, ?, ?, ?, ?)';

const _ = require('lodash');
const faker = require('faker');
// sets locale to pt_BR
faker.locale = "pt_BR";

_.times(17, function (nSx1) {

  var aParms = [];
  aParms.push(nSx1);
  aParms.push(faker.address.city());
  aParms.push(faker.address.state());
  aParms.push(faker.address.country());
  aParms.push(faker.address.zipCode());

  ksdraClient.execute(qryInsert, aParms, { prepare: true }, function (err, result) {
    if (err) {

      console.log(err);

    }
    console.log(result);
  });
});
