/**
 * Created by USER: tarso.
 * On         DATE: 16/01/17.
 * By         NAME: httpd02.js.
 */

'use strict';

// Modules
const express = require('express');

// Constants
const PORT = process.env.HTTPD_PORT || 8080;
const SERVER_NAME = process.env.HTTPD_SNAME || "Noname Server";

// App
const app = express();

app.get('/', function (req, res) {
  res.send(('Hello world from ' + SERVER_NAME + ' at ' + Date() + '\n'));
});

app.listen(PORT);
console.log('Running "%s" on http://localhost:%d started at %s', SERVER_NAME, PORT, Date());
