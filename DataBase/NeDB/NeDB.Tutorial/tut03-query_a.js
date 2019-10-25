/**
 * Created by USER: tarso.
 * On         DATE: 31/08/16.
 * By         NAME: tut03-query_a.js.
 */

'use strict';

/**
 * Basic querying
 */

// Load NeDB module
var DtStNoSql = require('nedb');

var dbCollection = new DtStNoSql({ filename: './dbToQuery.nedb.tqLocal', autoload: true });

/**
 * Only on first time to populate DB

var aDocs = [
  { _id: 'id1', planet: 'Mars', system: 'solar', inhabited: false, satellites: ['Phobos', 'Deimos'] },
  { _id: 'id2', planet: 'Earth', system: 'solar', inhabited: true, humans: { genders: 2, eyes: true } },
  { _id: 'id3', planet: 'Jupiter', system: 'solar', inhabited: false },
  { _id: 'id4', planet: 'Omicron Persei 8', system: 'futurama', inhabited: true, humans: { genders: 7 } },
  { _id: 'id5', completeData: { planets: [ { name: 'Earth', number: 3 }, { name: 'Mars', number: 2 }, { name: 'Pluton', number: 9 } ] } }
]

dbCollection.insert(aDocs, function (err, newDoc) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});

*/

// Finding all planets in the solar system
dbCollection.find({ system: 'solar' }, function (err, docs) {
  console.log('### docs is an array containing documents Mars, Earth, Jupiter\ndocs =', docs);
  // If no document is found, docs is equal to []
});

// Finding all planets whose name contain the substring 'ar' using a regular expression
dbCollection.find({ planet: /ar/ }, function (err, docs) {
  console.log('\n\n### docs contains Mars and Earth\ndocs =', docs);
});

// Finding all inhabited planets in the solar system
dbCollection.find({ system: 'solar', inhabited: true }, function (err, docs) {
  console.log('\n\n### docs is an array containing document Earth only\ndocs =', docs);
});

// Use the dot-notation to match fields in subdocuments
dbCollection.find({ "humans.genders": 2 }, function (err, docs) {
  console.log('\n\n### docs contains Earth\ndocs =', docs);
});

// Use the dot-notation to navigate arrays of subdocuments
dbCollection.find({ "completeData.planets.name": "Mars" }, function (err, docs) {
  console.log('\n\n### docs contains document 5\ndocs =', docs);
});

dbCollection.find({ "completeData.planets.name": "Jupiter" }, function (err, docs) {
  console.log('\n\n### docs is empty\ndocs =', docs);
});

dbCollection.find({ "completeData.planets.0.name": "Earth" }, function (err, docs) {
  console.log('\n\n### docs contains document 5\ndocs =', docs);
  // If we had tested against "Mars" docs would be empty because we are matching against a specific array element
});


// You can also deep-compare objects. Don't confuse this with dot-notation!
dbCollection.find({ humans: { genders: 2 } }, function (err, docs) {
  console.log('\n\n### docs is empty, because { genders: 2 } is not equal to { genders: 2, eyes: true }\ndocs =', docs);
});

// Find all documents in the collection
dbCollection.find({}, function (err, docs) {
  console.log('\n\n### docs =', docs);
});

// The same rules apply when you want to only find one document
dbCollection.findOne({ _id: 'id1' }, function (err, doc) {
  console.log('\n\n### doc is the document Mars\ndocs =', doc);
  // If no document is found, doc is null
});
