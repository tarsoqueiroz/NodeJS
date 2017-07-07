/**
 * Created by USER: tarso.
 * On         DATE: 07/07/17.
 * By         NAME: app.js.
 *
 * Source     WEB:  http://appdividend.com/2017/03/30/node-and-express-simple-crud-tutorial-with-mongodb/
 */

'use strict';

const express = require('express');
let   app = express();
let   mongoose = require('mongoose');

// Loading configurations
const settings = require('./settings');

// Loading routes
let   itemRouter = require('./src/routes/itemRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/items', itemRouter);

app.listen(settings.port, function(){
  console.log('Server is running on port:', settings.port);
})
app.get('/', function(req, res){
  res.send('Hello NodeJS ExpressJS MongoDB CRUD');
});
