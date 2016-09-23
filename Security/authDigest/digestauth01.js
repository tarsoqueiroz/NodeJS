/**
 * Created by USER: tarso.
 * On         DATE: 24/08/16.
 * By         NAME: digestauth01.js.
 */

/**
 * Basic Authentication
 *
 *    Example of Digest Authentication
 *
 * Source reference:
 *  http://www.codingdefined.com/2015/10/implement-digest-authentication-in.html
 *
 * With curl try this:
 *  curl -v --user authuser:basicpasswd1 http://localhost:3333 ******* TO EVALUATE *******
 */

const nPort    = 3333;

const http     = require('http');
const crypto   = require('crypto');

const username = 'authuser';
const password = 'digestpasswd';
const realm    = 'TarsoQueiroz';

var hasedMsg;

function hashFunction(message) {
  return crypto.createHash('md5').update(message).digest('hex');
}


function authenticateResponse(res) {
  res.writeHead(401, {'WWW-Authenticate' : 'Digest realm="' + realm + '"' + ', qop="auth",nonce="' + Math.random() + '"' + ',opaque="' + hasedMsg + '"'});
  res.end('Authorization required');

  console.log('Response Header:', res._header);
  console.log('*** REQUESTED LOGIN');
}

function getAuth (auth) {
  var authObj = {};
  auth.split(', ').forEach(function (value) {
    value = value.split('=');
    authObj[value[0]] = value[1].replace(/"/g, '');
  });
  return authObj;
}

hasedMsg = hashFunction(realm);
console.log('hasedMsg:', hasedMsg);

http.createServer(function (req, res) {
  var auth, login, digestAuth = {};

  console.log('\n-------------------');

  if(!req.headers.authorization) {
    authenticateResponse(res);
    return;
  }

  console.log('req.headers.authorization:', req.headers.authorization);
  auth = req.headers.authorization.replace(/^Digest /, '');
  console.log('auth (phase1)            :', auth);
  auth = getAuth(auth);
  console.log('auth (phase2)            :', auth);

  digestAuth.hashValue1 = hashFunction(auth.username + ':' + realm + ':' + password);
  digestAuth.hashValue2 = hashFunction(req.method + ':' + auth.uri);
//  digestAuth.response   = hashFunction([digestAuth.hashValue1, auth.nonce, auth.nc, auth.cnonce, auth.qop, digestAuth.hashValue2].join(':'));
  digestAuth.response   = hashFunction([digestAuth.hashValue1, auth.nonce, digestAuth.hashValue2].join(':'));

  console.log('digestAuth.hashValue1:', digestAuth.hashValue1, " -", (auth.username + ':' + realm + ':' + password));
  console.log('digestAuth.hashValue2:', digestAuth.hashValue2, " -", (req.method + ':' + auth.uri));
//  console.log('digestAuth.response  :', digestAuth.response,   " -", ([digestAuth.hashValue1, auth.nonce, auth.nc, auth.cnonce, auth.qop, digestAuth.hashValue2].join(':')));
  console.log('digestAuth.response  :', digestAuth.response,   " -", ([digestAuth.hashValue1, auth.nonce, digestAuth.hashValue2].join(':')));
  console.log('auth.response        :', auth.response);

  if(auth.response !== digestAuth.response) {
    console.log('*** USER:PASS ERROR');
    authenticateResponse(res);
    return;
  }
  res.end('Login Successful');
  console.log('*** LOGIN SUCCESSFULLY\n');
}).listen(nPort);

console.log('Listening on port', nPort);
