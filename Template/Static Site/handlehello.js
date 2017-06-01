/**
 * Created by USER: tarso.
 * On         DATE: 01/06/17.
 * By         NAME: handlehello.js.
 */

'use strict';

const express = require('express');
const path = require('path');
const app = express();
// Loading configurations
const settings = require('./config/settings');

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || settings.port);
app.use(express.static(path.join(__dirname, 'public') , settings.options ));

app.get('/', function(req, res)
{
  res.render('hello');   // this is the important part
});
app.get('/bodie', function(req, res)
{
  res.render('bodie');
});
app.get('/june', function(req, res)
{
  res.render('june');
});

app.get('/lee', function(req, res)
{
  res.render('town', { town: "Lee Vining"});
});
app.get('/leeless', function(req, res)
{
  res.render('town');
});

var californiapeople = {
  people: [
    {"name": "Adams",          "first": "Ansel",  "profession": "photographer", "born": "SanFrancisco"},
    {"name": "Muir",           "first": "John",   "profession": "naturalist",   "born": "Scotland"},
    {"name": "Schwarzenegger", "first": "Arnold", "profession": "governator",   "born": "Germany"},
    {"name": "Wellens",        "first": "Paul",   "profession": "author",       "born":"Belgium"},
    {"name": "Queiroz",        "first": "Tarso",  "profession": "IT support",   "born":"Brazil"}
  ]
};
app.get('/californiapeople', function(req, res)
{
  res.render('californiapeople', californiapeople);
});

app.get('/people', function(req, res)
{
  res.render('people', californiapeople);
});

app.listen(app.get('port'),  function () {
  console.log('Hello express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});