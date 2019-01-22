/**
 * app03.js
 *
 * Author: tarso
 * Date  : 14/01/19
 * Source:
 */
'use strict';

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'first');
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'first');
}).then((x) => {
  console.log('first then on promise2 x =', x);
  return x;
}).then((x) => {
  console.log('second then on promise2 x =', x);
  return 10;
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'third');
});

promise1.then((x) => {
  console.log('first then on promise1 x =', x);
  return promise2;
}).then((x) => {
  console.log('second then on promise1 x =', x);
  return promise3;
}).then((x) => {
  console.log('third then on promise1 x =', x);
});
