/**
 * app02-factorial.js
 *
 * Author: tarso
 * Date  : 14/01/19
 * Source:
 */
'use strict';

let code = (function(){
  let getFactorial = n => {
    return new Promise((resolve, reject) => {
      if(n <= 1){
        resolve(1);
      }
      resolve(
        getFactorial(n - 1).then(fact => {
          return fact * n;
        })
      )
    });
  }
  return {
    factorial: function(number){
      getFactorial(number).then(
        response => { console.log(response) }
      )
    }
  }
})();

//code.factorial(1);
code.factorial(2);
code.factorial(3);
code.factorial(4);
code.factorial(5);