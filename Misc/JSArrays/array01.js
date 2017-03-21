/**
 * Created by USER: tarso.
 * On         DATE: 21/03/17.
 * By         NAME: array01.js.
 */

'use strict';

let users = [
  {id: 1, name: 'Tom', age: 20},
  {id: 2, name: 'Sam', age: 18},
  {id: 3, name: 'Dan', age: 32, email: 'dan@mail.com'}
];

console.log('--- Array base');
console.log(users);
console.log('---');

console.log('--- forEach');
users.forEach(function(user) {
  console.log(user.name);
});
console.log('---');

console.log('--- Every');
function hasAnId(user, index, array) {
  return user.hasOwnProperty('id');
}

function isMoreThan18(user, index, array) {
  return user.age > 18;
}

console.log(users.every(hasAnId))     ; // true
console.log(users.every(isMoreThan18)); // false
console.log('---');

console.log('--- Some');
function hasAnEmail(user, index, array) {
  return user.hasOwnProperty('email');
}

function isMoreThan18(user, index, array) {
  return user.age > 18;
}

console.log(users.some(isMoreThan18)); // true
console.log(users.some(hasAnEmail));  // false
// console.log('---');

console.log('--- Filter');
function hasAnEmail(user, index, array) {
  return user.hasOwnProperty('email');
}

function isMoreThan18(user, index, array) {
  return user.age > 18;
}

console.log('users Who Are More Than 18 = ', users.filter(isMoreThan18)); // [{id: 1, name: 'Tom', age: 20}, {id: 3, name: 'Dan', age: 32}]
console.log('users With An Email        = ', users.filter(hasAnEmail)); // []
// console.log('---');

console.log('--- Map');
function describe(user) {
  return 'The user named ' + user.name + ' is ' + user.age + ' years old.';
}

let usersDescription = users.map(describe);
console.log(usersDescription);
// [
//   'The user named Tom is 30 years old',
//   'The user named Sam is 18 years old',
//   'The user named Dan is 32 years old'
// ]
console.log('---');
