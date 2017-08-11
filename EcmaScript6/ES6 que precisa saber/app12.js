/**
 * Created by USER: tarso.
 * On         DATE: 11/08/17.
 * By         NAME: app08.js.
 */

'use strict';

const sum = (start, ...numbers) =>
  numbers.reduce((acc, current) => acc + current, start)

console.log(sum(10, 1, 2, 3, 4, 5)); // 25
