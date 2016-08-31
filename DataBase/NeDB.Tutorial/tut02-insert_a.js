/**
 * Created by USER: tarso.
 * On         DATE: 31/08/16.
 * By         NAME: tut02-insert_a.js.
 */

'use strict';

/**
 * Inserting documents
 */

// Load NeDB module
var DtStNoSql = require('nedb');

// NeDB in memory
// var dbCollection = new DtStNoSql();

// NeDB persistent with manual loading
// var dbCollection = new DtStNoSql({ filename: './dbToInsert.nedb.tqLocal' });
// dbCollection.loadDatabase(function (err) {    // Callback is optional
  // Now commands will be executed
// });

var dbCollection = new DtStNoSql({ filename: './dbToInsert.nedb.tqLocal', autoload: true });


var doc = { hello: 'world',
            n: 5,
            today: new Date(),
            nedbIsAwesome: true,
            notthere: null,
            notToBeSaved: undefined,  // Will not be saved
            fruits: [ 'apple', 'orange', 'pear' ],
            infos: { name: 'nedb' }
};

dbCollection.count({}, function (err, nCount) {
  console.log('Records :', nCount);
});
dbCollection.insert(doc, function (err, newDoc) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});
dbCollection.count({}, function (err, nCount) {
  console.log('Records :', nCount);
});
dbCollection.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
  // Two documents were inserted in the database
  // newDocs is an array with these documents, augmented with their _id
});
dbCollection.count({}, function (err, nCount) {
  console.log('Records :', nCount);
});
// If there is a unique constraint on field 'a', this will fail
dbCollection.insert([{ a: 5 }, { a: 42 }, { a: 5 }], function (err) {
  // err is a 'uniqueViolated' error
  // The database was not modified
});
dbCollection.count({}, function (err, nCount) {
  console.log('Records :', nCount);
});

