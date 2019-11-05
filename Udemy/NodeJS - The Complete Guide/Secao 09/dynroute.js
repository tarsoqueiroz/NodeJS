const express    = require('express');
const bodyParser = require('body-parser');

console.log(process.env.port);

const port = process.env.port || 8888;
let   app  = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  console.log('in /');

  res.send('In /');
});

/*
app.get('/user', (req, res, next) => {
  res.redirect('/users');
});
*/

app.get('/user', (req, res, next) => {
  var userId = req.params.id;

  console.log('In /user');

  res.send('In /user');
});

app.get('/user/:id', (req, res, next) => {
  var userId = req.params.id;

  console.log('User id: ' + userId);

  res.send('User id: ' + userId);
});

app.get('/user/:id/count', (req, res, next) => {
  var userId = req.params.id;

  console.log('In /user/' + userId + '/count');

  res.send('User id: ' + userId + '  count');
});

app.get('/user/:id/count/:count', (req, res, next) => {
  var userId    = req.params.id;
  var userCount = req.params.count;

  console.log('In /user/' + userId + '/count/' + userCount);
  
  res.send('User id: ' + userId + '  count: ' + userCount);
});

app.get('/prmqry', (req, res, next) => {
  var prmId = req.params.id;
  var qryId = req.query.id;
  
  console.log('prmId:', prmId);
  console.log('qryId:', qryId);
  console.log(`In /prmqry?id=${qryId}`);
  
  res.send(`In /prmqry?id=${qryId}`);
});

app.get('/prmqry/:id', (req, res, next) => {
  var prmId = req.params.id;
  var qryId = req.query.id;
  
  console.log('prmId:', prmId);
  console.log('qryId:', qryId);
  console.log(`In /prmqry/${prmId}?id=${qryId}`);
  
  res.send(`In /prmqry/${prmId}?id=${qryId}`);
});

app.listen(port, () => {
  console.log('Server is listening on port', port);
});
