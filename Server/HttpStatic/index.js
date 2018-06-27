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

//setting middleware
console.log('./public');
app.use(express.static('./public')); //Serves resources from public folder

var server = app.listen(HTTP_PORT);

console.log('express.static running at http://localhost:%d', HTTP_PORT);