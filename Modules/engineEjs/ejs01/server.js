/**
 * server.js
 *
 * Author: tarso
 * Date  : 20/12/18
 * Source:
 */
'use strict';

var express        = require('express');
var faker          = require('faker');
var bodyParser     = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var app            = express();
var port           = 3000;

// Definimos que vamos utilizar o ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded());

// ROTAS
app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/about', (req, res) => {
  var users = [{
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: 'http://placekitten.com/300/300'
  }, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: 'http://placekitten.com/400/300'
  }, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: 'http://placekitten.com/500/300'
  }];

  res.render('pages/about', { usuarios: users })
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.post('/contact', (req, res) => {
  res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!');
});

app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log('Servidor iniciado em http://localhost:' + port);
