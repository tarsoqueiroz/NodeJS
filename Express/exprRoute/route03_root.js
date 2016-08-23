/**
 * Created by USER: tarso.
 * On         DATE: 23/08/16.
 * By         NAME: route03_root.js.
 */
'use strict';

const express = require('express');
const root    = express.Router();

/**
 * / (root) route methods
 */

root.route('/')
  .get(function (request, response) {
    response.json({
      "/ (root)": "GET method"
    });
  })
  .post(function (request, response) {
    response.json({
      "/ (root)": "POST method"
    });
  })
  .put(function (request, response) {
    response.json({
      "/ (root)": "PUT method"
    });
  })
  .delete(function (request, response) {
    response.json({
      "/ (root)": "DELETE method"
    });
  })

module.exports = root;
