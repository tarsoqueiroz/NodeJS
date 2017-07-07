/**
 * Created by USER: tarso.
 * On         DATE: 07/07/17.
 * By         NAME: itemRoutes.js.
 */

'use strict';

const express = require('express');
let   app = express();
let   itemRouter = express.Router();

itemRouter.route('/').get(function (req, res) {
  res.render('items');
});

itemRouter.route('/single').get(function (req, res) {
  res.render('singleItem');
});

itemRouter.route('/add').get(function (req, res) {
  res.render('addItem');
});

module.exports = itemRouter;