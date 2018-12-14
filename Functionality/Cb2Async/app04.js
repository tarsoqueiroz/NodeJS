/**
 * app04
 *
 * Author: tarso
 * Date  : 10/12/18
 * Source:
 */
'use strict';


const myPromise = new Promise(function(resolve, reject) {
  const codeIsFine = false;

  // code here

  if (codeIsFine) {
    resolve('fine');
  } else {
    reject('error');
  }
});

myPromise
  .then(function whenOk(response) {
    console.log(response);
    return response;
  })
  .catch(function notOk(err) {
    console.error(err);
  });