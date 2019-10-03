/*
** Immediately Invoked Function Expressions (IIFE)
*/

(function() {
  var x = 20;
  var y = 20;
  var answer = x + y;

  console.log(answer);
})();

// Simulating static variables

let autoIncrementSV = (function() {
  let number = 0

  return function () {
   number++
   return number
  }
})();

console.log(autoIncrementSV());
console.log(autoIncrementSV());