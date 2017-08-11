/**
 * Created by USER: tarso.
 * On         DATE: 11/08/17.
 * By         NAME: app08.js.
 */

'use strict';

function sum(start, ...numbers) {
  let result = start;
  numbers.forEach((number) => {
    result += number;
  });
  return result;
}

console.log(sum(10, 1, 2, 3, 4, 5)); // 25
