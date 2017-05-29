/**
 * Created by USER: tarso.
 * On         DATE: 09/05/17.
 * By         NAME: server_04.js.
 */

'use strict';

var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views')

module.exports = app;