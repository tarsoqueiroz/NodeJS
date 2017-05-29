/**
 * Created by USER: tarso.
 * On         DATE: 04/05/17.
 * By         NAME: server-api1.js.
 */

'use strict';

// server-api1.js
// BASE SETUP
// ==============================================
var express = require('express');
var router  = express.Router();

// ROUTES
// ==============================================
// route middleware that will happen on every request
router.use(function(req, res, next) {
  // log each request to the console
  console.log('Middleware for API 1:', req.method, req.url);

  // continue doing what we were doing and go to the route
  next();
});

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
  console.log('API 1 home page tasks');
  res.send('API 1 home page!');
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
  console.log('API 1 about page tasks');
  res.send('API 1 about page!');
});

// EXPORT
// ==============================================
module.exports = router;
