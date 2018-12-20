/**
 * server.js
 *
 * Author: tarso
 * Date  : 20/12/18
 * Source:
 */
'use strict';

const path = require('path');

const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.status(200).render('index', { pageTitle: 'Index Title', messageBody: 'Hello there!' });
});

app.get('/about', (req, res) => {
  res.render('about')
});
app.get('/about2', (req, res) => {
  res.render('about2', { from: 'My Name From'});
});

app.listen(3000);