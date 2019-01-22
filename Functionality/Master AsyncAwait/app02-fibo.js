/**
 * app02-fibo.js
 *
 * Author: tarso
 * Date  : 14/01/19
 * Source:
 */
'use strict';

function promiseFibonacci(number) {
//  console.log('fibo for number', number);
  return new Promise((resolve, reject) => {
      if (number < 0) {
        reject('invalid');
      } else if (number < 2) {
//        console.log('achei', number);
        resolve(number);
      } else {
//        console.log('procurar', number - 1, 'e', number - 2);
        let number1 = promiseFibonacci(number - 1).then((result) => { return result});
        let number2 = promiseFibonacci(number - 2).then((result) => { return result});
        resolve(number1 + number2);
      }
  });
};

promiseFibonacci(5).then((response) => {
  console.log(response);
  }).catch((error) => {
  console.log(error);
});
