/**
 * Created by USER: tarso.
 * On         DATE: 11/08/17.
 * By         NAME: app08.js.
 */

'use strict';

function sum(...numbers) {
  let result = 0
  numbers.forEach((number) => {
    result += number
  })
  return result
}

console.log(sum(1, 2, 3, 4, 5)); // 15
