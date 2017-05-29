/**
 * Created by USER: tarso.
 * On         DATE: 09/05/17.
 * By         NAME: app_04.js.
 */

'use strict';

var app = require('./config/server_04');

var routeHome = require('./app/routes/home')(app);
var routeNews = require('./app/routes/news')(app);
var routeAddNews = require('./app/routes/addnews')(app);

app.listen(3000, function () {

  console.log('Server running now...');

});