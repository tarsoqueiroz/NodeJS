/**
 * Created by USER: tarso.
 * On         DATE: 31/05/17.
 * By         NAME: app.js.
 *
 * Source: https://www.packtpub.com/books/content/using-handlebars-express
 */

'use strict';

const http = require('http');
const staticSite = require('node-static');
const fileServer = new staticSite.Server('./public');
// Loading configurations
const settings = require('./config/settings');

http.createServer(function (req, res) {
  fileServer.serve(req,res);
}).listen(settings.port, 'localhost');
console.log('Server running at http://localhost:' + settings.port);
