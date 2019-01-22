/**
 * app02a3
 *
 * Author: tarso
 * Date  : 15/01/19
 * Source: https://medium.com/@wesharehoodies/improve-your-asynchronous-javascript-code-with-async-and-await-c02fc3813eda
 */
'use strict';


const array = ['dog', 'cat', 'melon'];

const promise = hasMelon => new Promise((resolve, reject) => {
  if (hasMelon.includes('melon')) {
    resolve({ message: 'yay melon', hasMelon: true });
  } else {
    reject({ message: 'nay melon', hasMelon: false });
  }
});

promise(array)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

promise(['pineapple'])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
