/**
 * Created by USER: tarso.
 * On         DATE: 11/07/17.
 * By         NAME: tests.js.
 */

'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dbSample');

var db = mongoose.connection;

//db.on('error', console.error.bind(console, 'connection error:'));
db.on('error', function() {
  console.log('connection error');
});
db.once('open', function() {
  console.log("We're connected!");
});
