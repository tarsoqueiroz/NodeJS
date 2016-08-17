/**
 * Created by USER: tarso.
 * On         DATE: 17/08/16.
 * By         NAME: http06.js.
 *
 * Objective      : Test of error management
 */

const path    = require('path')
const express = require('express');
const exphbs  = require('express-handlebars')
const app     = express();
const nPort   = 3333;

/**
 * THE HANDLEBARS
 */

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname:       '.hbs',
  layoutsDir:    path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

/**
 * THE MIDDLEWARES
 */

app.use(function (request, response, next) {
  console.log("======>>> Middleware for sample - START <<<======");
  console.log("*** Request Headers ***\n", request.headers);
  console.log("*** URL requested ***\n", request.url);
  console.log("======>>> Middleware for sample - END <<<======");
  next();
});

/**
 * THE ROUTES
 */

app.get('/', function (request, response) {
  console.log('Root location');

  response.render('home', {
    name: 'Root page...'
  });
});

/**
 * THE ERROR HANDLER
 *
 * The error handler function should be the last function added with app.use.
 * The error handler has a next callback - it can be used to chain multiple error handlers.
 */
app.use(function (err, request, response, next) {
  // log the error, for now just console.log
  console.log(err);
  response.status(500).send('Something broke!');
});

/**
 * THE MAIN LISTEN FUNCTION
 *
 */
app.listen(nPort, function (err) {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${nPort}`);
});
