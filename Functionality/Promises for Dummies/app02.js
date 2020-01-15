/**
 * app02
 *
 * Created by tarso on 07/12/18
 *
 * source: https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1
 */
'use strict';

var keepsHisWord;
keepsHisWord = true;

var promise1 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesnt want to keep his word");
  }
});
console.log(promise1);