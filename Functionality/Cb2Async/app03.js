/**
 * app03
 *
 * Author: tarso
 * Date  : 10/12/18
 * Source: https://medium.freecodecamp.org/javascript-from-callbacks-to-async-await-1cc090ddad99
 */
'use strict';

// Execute the function "doThis" with another function as parameter, in this case "andThenThis". doThis will execute whatever code it has and when it finishes it should have "andThenThis" being executed.
doThis(andThenThis);

// Inside of "doThis" it's referenced as "callback" which is just a variable that is holding the reference to this function
function andThenThis() {
  console.log('and then this');
}

// You can name it whatever you want, "callback" is common approach
function doThis(callback) {
  console.log('this first');

  // the '()' is when you are telling your code to execute the function reference else it will just log the reference
  callback()
}
