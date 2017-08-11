/**
 * Created by USER: tarso.
 * On         DATE: 11/08/17.
 * By         NAME: app08.js.
 */

'use strict';

var sum = function() {
  var result = 0;
  for (var i=0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
