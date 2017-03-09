/**
 * Created by USER: tarso.
 * On         DATE: 09/03/17.
 * By         NAME: node-test.js.
 */

'use strict';

var users = [{
  id: 1,
  name: "Tarso",
  email: "tarso@yahoo.com.br",
  password: "tarso123"
}, {
  id: 2,
  name: "Anderson",
  email: "anderson@gmail.com",
  password: "anderson123"
}, {
  id: 3,
  name: "Lucas",
  email: "lucas@uol.com.br",
  password: "lucas123"
}];

var email = 'lucas@uol.com.br';
var password = 'lucas123';

var user = users.find(function(u) {
  console.log('----- ' + u.id + ' ' +u.name + ' ' + u.email + ' ' + u.password);
  console.log('-- ' + email + ' ' + password);
  console.log(u.email === email && u.password === password);
  return u.email === email && u.password === password;
});

console.log('achei ' + user.id + ' ' + user.name + ' ' + user.email + ' ' + user.password);