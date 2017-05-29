/**
 * Created by USER: tarso.
 * On         DATE: 09/05/17.
 * By         NAME: app_02.js.
 */

'use strict';

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home/index');
});

app.get('/addnews', function(req, res) {
  res.render('admin/addnews');
});

app.get('/news', function(req, res) {
  res.render('news/news');
});

app.listen(3000, function () {

  console.log('Server running now...');

});