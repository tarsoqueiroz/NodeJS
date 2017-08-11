/**
 * Created by USER: tarso.
 * On         DATE: 11/08/17.
 * By         NAME: app08.js.
 */

'use strict';

const sum = (...numbers) =>
  numbers.reduce((acc, current) => acc + current, 0)

console.log(sum(1, 2, 3, 4, 5)); // 15
