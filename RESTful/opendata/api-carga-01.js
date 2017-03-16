/**
 * Created by USER: tarso.
 * On         DATE: 16/03/17.
 * By         NAME: api-carga-01.js.
 *
 * Populate 'da_sample.people' DB
 */

'use strict';

const cassandra = require('cassandra-driver');
const ksdraClient = new cassandra.Client({ contactPoints: ['172.17.0.1'], keyspace: 'da_sample' });

//const qrySelect = 'SELECT * FROM names';
const qryInsert = 'INSERT INTO da_sample.people (id, name, surname, age, email, phone, photo) VALUES (?, ?, ?, ?, ?, ?, ?)';

const _ = require('lodash');
const faker = require('faker');
// sets locale to pt_BR
faker.locale = "pt_BR";

_.times(521, function (nSx1) {

  var aParms = [];
  aParms.push(faker.random.uuid());
  var strName = faker.name.firstName();
  aParms.push(strName);
  var strSurname = faker.name.lastName();
  aParms.push(strSurname);
  aParms.push(18 + faker.random.number() % 67);
  aParms.push((strName + '.' + strSurname + '@' + faker.internet.email().split('@')[ 1 ]).toLowerCase().replace(/\s/g, ''));
  aParms.push(faker.phone.phoneNumber());
  aParms.push(faker.internet.avatar());

  ksdraClient.execute(qryInsert, aParms, { prepare: true }, function (err, result) {
    if (err) {

      console.log(err);

    }
    console.log(result);
  });
});


/*

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

  */