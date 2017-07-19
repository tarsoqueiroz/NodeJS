/**
 * Created by USER: tarso.
 * On         DATE: 19/07/17.
 * By         NAME: app.js.
 */

'use strict';

               require('console.table');
var mongodb =  require('mongodb');
var ObjectId = require('mongodb').ObjectId;

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/ArtistsDB';

var action = getArgument('--action');

function getArgument(argument) {
  var index = process.argv.indexOf(argument);

  return (index === -1) ? null : process.argv[index + 1];
}

function listRecords(db) {
  db.collection('artists').find().toArray(function(error, items) {
    console.log();
    console.table(items);
    db.close();
  });
}

function addRecord(db) {
  var name    = getArgument('--name');
  var genre   = getArgument('--genre');
  var label   = getArgument('--label');
  var country = getArgument('--country');
  var artist  = {name: name, genre: genre, label: label,country: country};

  db.collection('artists').insert([artist], function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log();
      console.log('Created new artist with id ' + result.insertedIds);
    }
  });
}

function updateRecord(db) {
  var _id     = getArgument('--_id');
  var name    = getArgument('--name');
  var genre   = getArgument('--genre');
  var label   = getArgument('--label');
  var country = getArgument('--country');
  var artist  = {
    name: name,
    genre: genre,
    label: label,
    country: country,
  };

  db.collection('artists').updateOne({_id: ObjectId(_id)}, {$set: artist}, function(err, numUpdated) {
    if (err) {
      console.log(err);
    } else if (numUpdated) {
      console.log('Updated Successfully %d document(s).', numUpdated);
    } else {
      console.log('No document found with defined "find" criteria!');
    }
  });
}

function deleteRecord(db) {
  var _id = getArgument('--_id');

  db.collection('artists').deleteOne({ _id: ObjectId(_id) }, function(err, result) {
    console.log("Removed the document with the id: " + _id);
  });
}

var action = getArgument('--action');

function rudAction(db) {
  switch(action) {
    case "add":
      addRecord(db);
      break;

    case "update":
      updateRecord(db);
      break;

    case "delete":
      deleteRecord(db);
      break;
  }
}

MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log();
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log();
    console.log('Connection successfully established to', url);

    rudAction(db);

    listRecords(db);
  }
});
