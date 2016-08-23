/**
 * Created by USER: tarso.
 * On         DATE: 23/08/16.
 * By         NAME: basicauth01.js.
 */

/**
 * Basic Authentication
 *
 * Source reference:
 *  http://www.codingdefined.com/2015/10/implement-basic-authentication-in-nodejs.html
 *
 * With curl try this:
 *  curl -v --user authuser:basicpasswd1 http://localhost:3333
 */

const nPort    = 3333;
const http     = require('http');
const username = 'authuser';
const password = 'basicpasswd1';
const realm    = 'TarsoQueiroz';

http.createServer(function (req, res) {
  var auth, login;

  console.log('-------------------');
  if(!req.headers.authorization) {
    console.log('*** WITHOUT AUTHORIZATION HEADER');
    authenticateResponse(res);
    return;
  }
  console.log('Header authorization  :', req.headers.authorization);
  auth = req.headers.authorization.replace(/^Basic /, '');
  console.log('Authorization coded   :', auth);
  auth = (new Buffer(auth, 'base64').toString('utf8'));
  console.log('Authorization decoded :', auth);

  login = auth.split(':');

  if(login[0] === username && login[1] === password) {
    res.end("Login Successful");
    console.log('*** LOGIN SUCCESSFULLY');
    return;
  }
  console.log('*** USER:PASS ERROR');
  authenticateResponse(res);
  console.log('-------------------');
}).listen(nPort);

function authenticateResponse(res) {
  res.writeHead(401, {'WWW-Authenticate' : 'Basic realm="' + realm + '"'});
  res.end('Authorization required');
  console.log('*** REQUESTED LOGIN');
}
