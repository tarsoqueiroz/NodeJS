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

// Simulating private variables

const autoIncrementerPV = (function() {
  let value = 0;

  return {
    incr() {
        value++
        console.log(value);
    },

    get value() {
        return value;
    }
  };
})();

autoIncrementerPVpa.incr()
autoIncrementerPV.incr()
autoIncrementerPV.value
autoIncrementerPV.value = 3
