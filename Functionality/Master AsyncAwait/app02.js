/**
 * app02
 *
 * Author: tarso
 * Date  : 14/01/19
 * Source:
 */
'use strict';

const promiseFunction = new Promise((resolve, reject) => {
  const add = (a, b) => a + b;
  resolve(add(2, 2));
});

promiseFunction.then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
});
