/**
 * Created by USER: tarso.
 * On         DATE: 30/05/17.
 * By         NAME: main.js.
 */

'use strict';

// Loading modules
const express  = require('express');
const consign  = require('consign');
// Loading configurations
const settings = require('./config/settings');

let app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

consign()
  .include('routes')
  .then('models')
  .into(app);

app.listen(settings.port, function(){
  console.log('Servidor ON in port', settings.port);
});
