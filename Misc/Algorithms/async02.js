/**
 * Created by USER: tarso.
 * On         DATE: 10/10/16.
 * By         NAME: async02.js.
 */

var a = 100;
var b = 999;
console.log('Print 01');
console.log('a:', a);
console.log('b:', b);

setTimeout(function () {
  a = 0;
  console.log('SetTimeout 01');
  console.log('a:', a);
  console.log('b:', b);
}, 1000);

b = a; // 100 or 0?
console.log('Print 02');
console.log('a:', a);
console.log('b:', b);

setTimeout(function () {
  a = 50;
  console.log('SetTimeout 02');
  console.log('a:', a);
  console.log('b:', b);
}, 1000);

for(var i=0; i<50000000000; ++i){};

console.log('Print 03');
console.log('a:', a);
console.log('b:', b);
