/**
 * Created by USER: tarso.
 * On         DATE: 06/06/17.
 * By         NAME: asyncops01.js.
 *
 * Source: https://blog.risingstack.com/node-js-async-best-practices-avoiding-callback-hell-node-js-at-scale/
 */

'use strict';

function fastFunction (done) {
  setTimeout(function () {
    done();
  }, 100)
}

function slowFunction (done) {
  setTimeout(function () {
    done();
  }, 1000)
}

function fastMessage () {
  console.log('Fast message...');
}
function slowMessage () {
  console.log('Slow message');
}

console.log('Calling slowFunction with slowMessage');
slowFunction(slowMessage);
console.log('Calling fastFunction with fastMessage');
fastFunction(fastMessage);

