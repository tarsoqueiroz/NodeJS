/**
 * app02a.js
 *
 * Author: tarso
 * Date  : 15/01/19
 * Source: https://medium.com/@wesharehoodies/improve-your-asynchronous-javascript-code-with-async-and-await-c02fc3813eda
 */
'use strict';

const array = ['dog', 'cat', 'melon'];
//const hasMelon = array.includes('melon'); // yeah
const hasMelon = array.includes('pineapple'); // noah

console.log(hasMelon);

const promise = new Promise((resolve, reject) => {
  if (hasMelon) {
    resolve({ message: 'yay melon', hasMelon: true });
  } else {
    reject({ message: 'nay melon', hasMelon: false });
  }
});

promise
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
