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

app.get('/api/Widgets', (request, response, next) => {
  // Business logic goes in here...
  // then we send something in the response, maybe some JSON!
  response.json({ widgets: [ { id: 1, name: 'foo' }, { id: 2, name: 'bar' } ] });
// Note that we DO NOT all next() unless we want another route to also fire (usually we do not).
});

app.listen(settings.port);
console.log('Server up on port', settings.port);
