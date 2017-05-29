/**
 * Created by USER: tarso.
 * On         DATE: 29/05/17.
 * By         NAME: beer.js.
 */

'use strict';

// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var BeerSchema   = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number
});

// Export the Mongoose model
module.exports = mongoose.model('Beer', BeerSchema);