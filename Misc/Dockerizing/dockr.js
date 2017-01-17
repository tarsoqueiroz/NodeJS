/**
 * Created by USER: tarso.
 * On         DATE: 16/01/17.
 * By         NAME: dockr.js.
 *
 * Source: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
 *         http://staxmanade.com/2016/07/run-multiple-docker-environments--qa--beta--prod--from-the-same-docker-compose-file-/
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
//  res.send(('Hello world from ' + SERVER_NAME + ' at ' + Date() + '\n'));
  res.writeHead(200, { "Content-Type": "text/plain"});
  res.end(('Hello World from server <' + SERVER_NAME + '> at [' + Date() + ']\n'));
});

app.listen(PORT);
console.log('Running "%s" on http://localhost:%d started at %s', SERVER_NAME, PORT, Date());
