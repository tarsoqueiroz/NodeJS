/**
 * Created by USER: tarso.
 * On         DATE: 04/05/17.
 * By         NAME: server-main.js.
 */

'use strict';

// server.js

// BASE SETUP
// ==============================================

var   express = require('express');
var   app     = express();
const port    = process.env.PORT || 8888;

// ROUTES
// ==============================================
const routeApi1 = require('./server-api1');

// apply the routes to our application

app.use('/api/api1/', routeApi1);

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
