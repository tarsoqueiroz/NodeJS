/**
 * Created by USER: tarso.
 * On         DATE: 18/08/16.
 * By         NAME: app01.js.
 */

/**
 * PERSISTENT DB
 */

var Datastore = require('nedb');
var db        = new Datastore({ filename: './persistent.nedb' });
db.loadDatabase(function (err) { // Callback is optional
  // Now commands will be executed
});

console.log('After creation...');
console.log(db);

var docOne = {
  nameWorker: 'John',
  numberID: 1,
  dateCreation: new Date(),
  isMale: true
};
var docTwo = {
  "nameWorker": 'Mary',
  "numberID": 2,
  "dateCreation": new Date(),
  "isMale": false,
  "isFemale": true
};

db.insert(docOne, function (err, newDoc) { // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
  console.log('First record inserted...');
  console.log(newDoc);
});
db.insert(docTwo, function (err, insertedDoc) {
  console.log('Second record inserted...');
  console.log(insertedDoc);
});

db.find({  }, function (err, docsFind) {
  // docs is an array containing documents
  // If no document is found, docs is equal to []
  console.log('Docs found...');
  console.log(docsFind);
});

db.find({ numberID: { $gte: 2 } }, function (err, docsFind) {
  console.log('Docs found...');
  console.log(docsFind);
});