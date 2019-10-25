/**
 * Created by USER: tarso.
 * On         DATE: 18/08/16.
 * By         NAME: app01.js.
 */

/**
 * PERSISTENT DB
 */

var Datastore = require('nedb');
var db        = new Datastore({ filename: './persistent2.nedb' });

db.loadDatabase(function (err) { // Callback is optional
  // Now commands will be executed
});

console.log('After creation...');
console.log(db);

var strDescription = 'First pass';
var docOne = {
  nameWorker: 'Peter',
  numberID: 1,
  dateCreation: new Date(),
  isMale: false,
  descriptionPhase: strDescription
};
var docTwo = {
  "nameWorker": 'John',
  "numberID": 2,
  "dateCreation": new Date().toISOString(),
  "isMale": true,
  "isFemale": false,
  "descriptionPhase": strDescription
};
var docThree = {
  "nameWorker": 'Mary',
  "numberID": 3,
  "dateCreation": new Date().toDateString(),
  "isMale": false,
  "isFemale": true,
  "descriptionPhase": strDescription
};
var docFour = {
  nameWorker: 'Amy',
  numberID: 4,
  dateCreation: new Date().toUTCString(),
  isMale: false,
  isFemale: true,
  descriptionPhase: strDescription
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
db.insert(docThree, function (err, insertedDoc) {
  console.log('Third record inserted...');
  console.log(insertedDoc);
});
db.insert(docFour, function (err, insertedDoc) {
  console.log('Fourth record inserted...');
  console.log(insertedDoc);
});


db.find({  }, function (err, docsFind) {
  // docs is an array containing documents
  // If no document is found, docs is equal to []
  console.log('Docs found on search without restrictions...');
  console.log(docsFind);
});

db.find({ numberID: { $gte: 3 } }, function (err, docsFind) {
  console.log('Docs found with ID greater equal 3...');
  console.log(docsFind);
});
