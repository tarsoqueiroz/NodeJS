/**
 * Created by USER: tarso.
 * On         DATE: 09/05/17.
 * By         NAME: app_03.js.
 */

'use strict';

var app = require('./config/server_03');

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