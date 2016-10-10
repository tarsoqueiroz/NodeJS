/**
 * Created by USER: tarso.
 * On         DATE: 16/08/16.
 * By         NAME: async01.js.
 */

console.log('First written record');

setTimeout(function cb() {
  console.log('Second written record');
}, 2000);

setTimeout(function () {
  console.log('Third written record');
}, 1000);

console.log('Fourth written record');
