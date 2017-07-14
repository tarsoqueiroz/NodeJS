/**
 * Created by USER: tarso.
 * On         DATE: 11/07/17.
 * By         NAME: models.js.
 */

'use strict';

// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  address: {
    street:     { type: String },
    number:     { type: Number },
    city:       { type: String },
    state:      { type: String },
    country:    { type: String },
    postcode:   { type: Number }
  },
  contact: {
    email:  { type: String, unique: true },
    phone:  { type: Number, unique: true },
  },
  meta: {
    created_at: Date,
    updated_at: Date
  }
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;