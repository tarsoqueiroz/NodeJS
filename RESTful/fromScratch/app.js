/**
 * Created by USER: tarso.
 * On         DATE: 26/09/16.
 * By         NAME: app.js.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Genre = require('./models/genre');
var Book = require('./models/book');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Please use /api/books or /api/genres !!!');
});

app.get('/api/genres', function (req, res) {
  Genre.getGenres(function (err, genres) {
    if(err) {
      throw err;
    }
    res.json(genres);
  });
});

app.post('/api/genres', function (req, res) {
  var genre = req.body;

  Genre.addGenres(genre, function (err, genre) {
    if(err) {
      throw err;
    }
    res.json(genre);
  });
});

app.put('/api/genres/:_id', function (req, res) {
  var id = req.params._id;
  var genre = req.body;

  Genre.updateGenres(id, genre, {}, function (err, genre) {
    if(err) {
      throw err;
    }
    res.json(genre);
  });
});

app.delete('/api/genres/:_id', function (req, res) {
  var id = req.params._id;

  Genre.deleteGenres(id, function (err, genre) {
    if(err) {
      throw err;
    }
    res.json(genre);
  });
});

app.get('/api/books', function (req, res) {
  Book.getBooks(function (err, book) {
    if(err) {
      throw err;
    }
    res.json(book);
  });
});

app.get('/api/books/:_id', function (req, res) {
  Book.getBookById(req.params._id, function (err, book) {
    if(err) {
      throw err;
    }
    res.json(book);
  });
});

app.post('/api/books', function (req, res) {
  var book = req.body;

  Book.addBook(book, function (err, book) {
    if(err) {
      throw err;
    }
    res.json(book);
  });
});

app.put('/api/books/:_id', function (req, res) {
  var id = req.params._id;
  var book = req.body;

  Book.updateBook(id, book, {}, function (err, book) {
    if(err) {
      throw err;
    }
    res.json(book);
  });
});

app.delete('/api/books/:_id', function (req, res) {
  var id = req.params._id;

  Book.deleteBook(id, function (err, book) {
    if(err) {
      throw err;
    }
    res.json(book);
  });
});

app.listen(3000);
console.log('Running on port 3000...');
