/**
 * Created by USER: tarso.
 * On         DATE: 06/01/17.
 * By         NAME: es6-03-map.js.
 *
 * Source: https://babeljs.io/
 */

'use strict';

let aBase = [1, 2, 3];
let aMapped = aBase.map(n => n + 1);

console.log('Array base   :', aBase);
console.log('Array mapped :', aMapped);

// good
aMapped = aBase.map((x) => {
  const y = x + 1;
return x * y;
});

console.log('Array base   :', aBase);
console.log('Array mapped :', aMapped);

console.log([1, 2, 3].map(number => `A string containing the ${number}.`))
