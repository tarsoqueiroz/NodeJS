/**
 * Created by USER: tarso.
 * On         DATE: 25/04/17.
 * By         NAME: rtkdb01a-createdb.
 */

'use strict';

const rtkdb = require('rethinkdb');
var   connrtkdb = null;

rtkdb.connect({host: '10.15.20.117', port: 28015}, function (err, conn) {
  if (err) throw err;
  connrtkdb = conn;
});

