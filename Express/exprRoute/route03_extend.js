/**
 * Created by USER: tarso.
 * On         DATE: 23/08/16.
 * By         NAME: route02_extend.js.
 */
'use strict';

const express = require('express');
const app     = express.Router();

/**
 * /extend route methods
 */

app.route('/')
// Method GET
  .get(function (req, res) {
    response.json({
      "/test": "GET method"
    });
  })  // Method POST
  .post(function (req, res) {
    response.json({
      "/test": "POST method"
    });
  });

module.exports = app;
