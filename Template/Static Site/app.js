/**
 * Created by USER: tarso.
 * On         DATE: 31/05/17.
 * By         NAME: app.js.
 *
 * Source: https://www.packtpub.com/books/content/using-handlebars-express
 */

'use strict';

const express = require('express');
const path = require('path');
const app = express();
// Loading configurations
const settings = require('./config/settings');

app.set('port', process.env.PORT || settings.port);

var options = {
  dotfiles: 'ignore',
  extensions: ['htm', 'html'],
  index: false
};

app.use(express.static(path.join(__dirname, 'public') ,
  settings.options ));

app.listen(app.get('port'), function () {
  console.log('Hello express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});