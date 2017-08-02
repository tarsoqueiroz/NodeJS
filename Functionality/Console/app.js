/**
 * Created by USER: tarso.
 * On         DATE: 02/08/17.
 * By         NAME: app.js.
 */

'use strict';

console.log('+------------------------+\n| Test of console module |\n+------------------------+');

var bConditionTRUE  = true;
var bConditionFALSE = false;

console.log('\n** Test of console.assert()');
try {
  console.assert(bConditionTRUE,  '  Showing if condition is TRUE, with bConditionTRUE');
  console.log('If you see this, no error on console.assert() with bConditionTRUE');
} catch (err) {
  console.log('Ops!!! Error on console.assert()');
  console.log(err);
}
try {
  console.assert(bConditionFALSE,  '  Showing if condition is FALSE, with bConditionFALSE');
  console.log('If you see this, no error on console.assert() with bConditionFALSE');
} catch (err) {
  console.log('Ops!!! Error on console.assert() with bConditionFALSE');
  console.log(err);
}

console.log('\n** Test of console.assert()');
console.info('console.info() is an alias of console.log()')

console.log('\n** Test of console.time() and console.timeEnd()');
console.time('Time of 10.000 interactions');
for (let nSx1 = 0; nSx1 < 10000; nSx1++) {};
console.timeEnd('Time of 10.000 interactions');

console.log('\n** Test of console.error()');
console.error('msg 1 from console.error() with code #%d', 1);
console.error('msg 2 from console.error() with code #', 2);
console.log('obs.: msgs was printed on stderr')

console.log('\n** Test of console.trace()');
console.trace('console.trace() show this message');
console.log('Post console.trace() message');

console.log('\n** Test of console.warn()');
console.warn('msg 1 from console.warn() with code #%d', 1);
console.warn('msg 2 from console.warn() with code #', 2);
console.log('obs.: msgs was printed on stderr')

console.log('\n** Test of console.dir()');
var objSample = {
  name: 'Tarso',
  surname: 'Queiroz'
};
console.dir(objSample);
objSample.name = 'Other';
console.dir(objSample);
