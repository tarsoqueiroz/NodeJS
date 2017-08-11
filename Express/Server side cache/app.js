/**
 * Created by USER: tarso.
 * On         DATE: 10/08/17.
 * By         NAME: app.js.
 */

'use strict';

// Configurations parms
const settings = require('./config/settings');

var express = require('express');
var app = express();
var mcache = require('memory-cache');

app.set('view engine', 'jade');

var cache = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}

app.get('/', cache(30), (req, res) => {
  setTimeout(() => {
  res.render('index', { title: 'Hey', message: 'Hello there', date: new Date()})
}, 1000) //setTimeout was used to simulate a slow processing request
});

app.get('/user/:id', cache(30), (req, res) => {
  setTimeout(() => {
    if (req.params.id == 1) {
      res.json({ id: 1, name: "John", date: new Date()})
    } else if (req.params.id == 2) {
      res.json({ id: 2, name: "Bob", date: new Date()})
    } else if (req.params.id == 3) {
      res.json({ id: 3, name: "Stuart", date: new Date()})
    }
  }, 1000) //setTimeout was used to simulate a slow processing request
});

app.use((req, res) => {
  res.status(404).send('') //not found
});

app.listen(settings.port, function () {
  console.log(`Example app listening on port ${settings.port}!`)
});