/**
 * server.js
 *
 * Created by tarso on 05/07/18
 */

const HTTP_PORT = process.env.HTTP_PORT || 8080; // $ HTTP_PORT=8888 nodemon --ignore sessions/ server.js
                                                 // $ HTTP_PORT=8888 npm run dev:server

//npm modules
const express = require('express');
const uuid = require('uuid/v4');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const users = [
  {id: '2f24vvg', email: 'test@test.com', password: 'password'}
];

// configure passport.js to use the local strategy
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    console.log('Inside local strategy callback');
    // here is where you make a call to the database
    // to find the user based on their username or email address
    // for now, we'll just pretend we found that it was users[0]
    const user = users[0];
    if(email === user.email && password === user.password) {
      console.log('Local strategy returned true');
      return done(null, user);
    }
  }
));

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
  console.log('Inside serializeUser callback. User id is save to the session file store here');
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('Inside deserializeUser callback');
  console.log(`The user id passport saved in the session file store is: ${id}`);
  const user = users[0].id === id ? users[0] : false;
  done(null, user);
});

// create the server
const app = express();

// add & configure middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  genid: (req) => {
    console.log('Inside the session middleware');
    console.log(req.sessionID);
    return uuid() // use UUIDs for session IDs
  },
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// create the homepage route at '/'
app.get('/', (req, res) => {
  console.log('Inside the homepage callback function');
  console.log(req.sessionID);
  res.send(`Hit home page. Received the unique id: ${req.sessionID}\n`);
  res.end();
});

// create the login get and post routes
app.get('/login', (req, res) => {
  console.log('Inside GET /login callback function');
  console.log(req.sessionID);
  res.send(`You got the login page!\n`);
  res.end();
});

app.post('/login', (req, res, next) => {
  console.log('Inside POST /login callback');
  passport.authenticate('local', (err, user, info) => {
    console.log('Inside passport.authenticate() callback');
    console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
    console.log(`req.user: ${JSON.stringify(req.user)}`);
    req.login(user, (err) => {
      console.log('Inside req.login() callback');
      console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
      console.log(`req.user: ${JSON.stringify(req.user)}`);
      return res.send('You were authenticated & logged in!\n');
    })
  })(req, res, next);
});

app.get('/authrequired', (req, res) => {
  console.log('Inside GET /authrequired callback');
  console.log(`User authenticated? ${req.isAuthenticated()}`);
  if(req.isAuthenticated()) {
    res.send('you hit the authentication endpoint\n');
  } else {
    res.redirect('/');
  }
});

// tell the server what port to listen on
app.listen(HTTP_PORT, () => {
  console.log('Listening on http://localhost:%d', HTTP_PORT);
});
