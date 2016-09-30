/**
 * Created by USER: tarso.
 * On         DATE: 28/09/16.
 * By         NAME: bear.js.
 */

// app/models/bear.js

var mongoose   = require('mongoose');

var BearSchema = new mongoose.Schema({
  name: {
    type: String
  },
  teor: {
    type: String
  },
  country: {
    type: String
  }
});

module.exports = mongoose.model('Bear', BearSchema);
