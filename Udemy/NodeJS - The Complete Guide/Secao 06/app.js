const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.render();
});

app.get('/users', (req, res, next) => {
  res.render();
});

app.post('/add-user', (req, res, next) => {
  res.redirect('/users');
});

// Iste ponto do ambiente está em 2:30

app.listen(3000);
