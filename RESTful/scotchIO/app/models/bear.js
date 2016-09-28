/**
 * Created by USER: tarso.
 * On         DATE: 28/09/16.
 * By         NAME: bear.js.
 */

// app/models/bear.js

var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;

var BearSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Bear', BearSchema);
