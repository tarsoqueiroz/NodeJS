var math = require("mathjs");

// functions and constants
console.log("Functions and constants");
console.log(math.round(math.e, 3));            // 2.718
console.log(math.atan2(3, -3) / math.pi);      // 0.75
console.log(math.log(10000, 10));              // 4
console.log(math.sqrt(-4));                    // 2i
console.log(math.derivative('x^2 + x', 'x'));  // 2*x+1
console.log(math.pow([[-1, 2], [3, 1]], 2));   // [[7, 0], [0, 7]]

// expressions
console.log("Expressions");
console.log(math.eval('1.2 * (2 + 4.5)'));     // 7.8
console.log(math.eval('12.7 cm to inch'));     // 5 inch
console.log(math.eval('sin(45 deg) ^ 2'));     // 0.5
console.log(math.eval('9 / 3 + 2i'));          // 3 + 2i
console.log(math.eval('det([-1, 2; 3, 1])'));  // -7

// chaining
console.log(math.chain(3)
                .add(4)
                .multiply(2)
                .done()); // 14
