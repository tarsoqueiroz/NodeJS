/**
 * Created by USER: tarso.
 * On         DATE: 31/08/16.
 * By         NAME: tut01-create_a.js.
 */

'use strict';

/**
 * Creating/loading a database
 */

// Load NeDB module
var Datastore = require('nedb');

// Type 1: In-memory only datastore (no need to load the database)
var dbInMemory = new Datastore();

// Type 2: Persistent datastore with manual loading
var dbPersistentManLoad = new Datastore({ filename: './persistentManLoad.nedb.tqLocal' });

dbPersistentManLoad.loadDatabase(function (err) {    // Callback is optional
  // Now commands will be executed
});

// Type 3: Persistent datastore with automatic loading
var dbPersistentAutLoad = new Datastore({ filename: './persistentAutLoad.nedb.tqLocal', autoload: true });
// You can issue commands right away

/**
// Type 4: Persistent datastore for a Node Webkit app called 'nwtest'
// For example on Linux, the datafile will be ~/.config/nwtest/nedb-data/something.db
var Datastore = require('nedb')
  , path = require('path')
  , db = new Datastore({ filename: path.join(require('nw.gui').App.dataPath, 'something.db') });
 */


// Of course you can create multiple datastores if you need several
// collections. In this case it's usually a good idea to use autoload for all collections.
var dbCollections = {};
dbCollections.users  = new Datastore('./multiDataStoreUsers.nedb.tqLocal');
dbCollections.robots = new Datastore('./multiDataStoreRobots.nedb.tqLocal');
dbCollections.things = new Datastore({ filename: './multiDataStoreThings.nedb.tqLocal', autoload: true });

// You need to load each database (here we do it asynchronously)
dbCollections.users.loadDatabase();
dbCollections.robots.loadDatabase();
