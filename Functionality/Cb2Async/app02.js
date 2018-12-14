/**
 * app02.js
 *
 * Author: tarso
 * Date  : 10/12/18
 * Source: https://medium.freecodecamp.org/javascript-from-callbacks-to-async-await-1cc090ddad99
 */
'use strict';

console.log('1');
setTimeout(function afterTwoSeconds() {
  console.log('2')
}, 2000);
console.log('3');
