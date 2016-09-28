/**
 * Created by USER: tarso.
 * On         DATE: 28/09/16.
 * By         NAME: server.js.
 */

'use strict';

/**
 * Base Setup
 */
/**
 * Packages
 */
var express    = require('express');        //
var app        = express();                 //
var bodyParser = require('body-parser');    //

/**
 * DB connection
 */
var mongoose = require('mongoose');
//mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database
mongoose.connect('mongodb://localhost:27017/ScotchIO'); // connect to our database

/**
 * Models
 */
var Bear = require('./app/models/bear');

/**
 * Configure app to use bodyParser()
 * This will let us get the data from a POST
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

/**
 * ROUTES FOR OUR API
 */
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening. WorldWideWeb is calling!!!');
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.all('/', function(req, res) {
  res.json({ "message": "zoAPI: welcome to ZO API v1!" });
});

/**
 * More routes for our API will happen here
 */

/**
 * REGISTER OUR ROUTES
 * all of our routes will be prefixed with /api
 */
// Root site route
app.use('/', express.Router().all('/', function (req, res) {
  res.json({ "message": "zoAPI: try /api/v1"});
}));

// Root of API route
app.use('/api', express.Router().all('/', function (req, res) {
  res.json({ "message": "zoAPI: try /api/v1"});
}));

// API v1
app.use('/api/v1', router);

/**
 * START THE SERVER
 */
app.listen(port);
console.log('Magic happens on port ' + port);
