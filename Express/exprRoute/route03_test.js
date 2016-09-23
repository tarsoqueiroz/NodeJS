/**
 * Created by USER: tarso.
 * On         DATE: 23/08/16.
 * By         NAME: route03_test.js.
 */
'use strict';

const express = require('express');
const test    = express.Router();

/**
 * /extend route methods
 */

test.route('/')
  .get(function (request, response) {
    response.json({
      "/test": "GET method"
    });
  })
  .post(function (request, response) {
    response.json({
      "/test": "POST method"
    });
  });

module.exports = test;
