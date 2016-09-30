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
router.get('/', function(req, res) {
  res.json({ "message": "zoAPI: welcome to ZO API v1!" });
});

/**
 * More routes for our API will happen here
 */

/**
 * Routes that end in /bears
 */
router.route('/bears')
// create a bear (accessed at POST http://localhost:8080/api/v1/bears)
  .post(function(req, res) {

    var bear = new Bear();            // create a new instance of the Bear model
    bear.name = req.body.name;        // set the bears name (comes from the request)
    bear.teor = req.body.teor;        // set the bears teor
    bear.country = req.body.country;  // set the bears country

    console.log('   req.body: ' + req.body);

    // save the bear and check for errors
    bear.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Bear created!' });
      console.log('   Bear created!');
    });
  })
// get all the bears (accessed at GET http://localhost:8080/api/v1/bears)
  .get(function(req, res) {
    Bear.find(function(err, bears) {
      if (err)
        res.send(err);

      res.json(bears);
    });
  });

/**
 * Routes that end in /bears/:bear_id
*/
router.route('/bears/:bear_id')
// get the bear with that id (accessed at GET http://localhost:8080/api/v1/bears/:bear_id)
  .get(function(req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
      if (err)
        res.send(err);
      res.json(bear);
    });
  })
// update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
  .put(function(req, res) {
    // use our bear model to find the bear we want
    Bear.findById(req.params.bear_id, function(err, bear) {

      if (err)
        res.send(err);

      bear.name = req.body.name;  // update the bears info

      if (req.body.name) {
        bear.name = req.body.name;        // set the bears name (comes from the request)
      }
      if (req.body.teor) {
        bear.teor = req.body.teor;        // set the bears name (comes from the request)
      }
      if (req.body.country) {
        bear.country = req.body.country;     // set the bears name (comes from the request)
      }

      // save the bear
      bear.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Bear updated!' });
      });

    });
  })
// delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
  .delete(function(req, res) {
    Bear.remove({
      _id: req.params.bear_id
    }, function(err, bear) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });


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
console.log('\nMagic happens on port ' + port + ' started at ' + new Date().getHours() + 'hs' + new Date().getMinutes());
