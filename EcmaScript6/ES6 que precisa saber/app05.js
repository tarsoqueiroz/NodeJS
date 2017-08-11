/**
 * Created by USER: tarso.
 * On         DATE: 11/08/17.
 * By         NAME: app05.js.
 */

'use strict';

var multiply = function(x, y) {
  console.log(x);
  console.log(y);
  y = y | 1;
  console.log(x);
  console.log(y);
  return x * y;
};

console.log(multiply(3, 2)); // 6
console.log(multiply(3)); // 3
