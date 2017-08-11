/**
 * Created by USER: tarso.
 * On         DATE: 11/08/17.
 * By         NAME: app06.js.
 */

'use strict';

const multiply = (x, y = 1) => {
  console.log(x);
  console.log(y);
  return x * y
}

console.log(multiply(3, 2)); // 6
console.log(multiply(3)); // 3
