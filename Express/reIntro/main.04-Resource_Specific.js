/**
 * Created by USER: tarso.
 * On         DATE: 27/06/17.
 * By         NAME: main.js.
 *
 * Source     SITE: https://www.lunchbadger.com/a-reintroduction-to-express-js-routing/
 */

'use strict';

const settings = require('./settings');

let express = require('express');
let app = express();
let router = express.Router();

app.use(router.all('*', (request, response, next) => {
  console.log('Main app 01:- before all routes -', request.url);
  next();
}));

// NOTE: We call `app.use()` here, NOT `app.get()`
app.use('/api/Widgets', require('./main-widgets'));

app.use(router.all('*', (request, response, next) => {
  console.log('Main app 02:- after all routes -', request.url);
  next();
}));

app.listen(settings.port);
console.log('Server up on port', settings.port);
