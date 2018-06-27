/**
 * index.js
 *
 * Created by tarso on 26/06/18
 * Source: https://www.youtube.com/watch?v=Hk2LkOD7ZH0
 *         http://expressjs.com/pt-br/guide/using-middleware.html
 */

const HTTP_PORT = process.env.HTTP_PORT || 8080; // $ HTTP_PORT=8080 npm run dev
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['html', 'htm'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
};
const express = require('express');
const app = express();

// Middleware for log
const tqLogger = function (req, res, next) {
  console.log('Logged...', Date.now());
  next();
};
// Middleware for 404
const tq404 = function(req, res, next) {
  console.log('404');
  res.redirect('./404.html');
};

//setting middleware
app.use(tqLogger);

console.log('./public');
app.use(express.static('./public')); //Serves resources from public folder

app.use(tq404);

// Starting the server
var server = app.listen(HTTP_PORT);

console.log('express.static running at http://localhost:%d', HTTP_PORT);