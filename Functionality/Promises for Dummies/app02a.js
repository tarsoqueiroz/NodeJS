/**
 * app02a
 *
 * Created by tarso on 07/12/18
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

promise1
  .then(message => console.log(message))
  .catch(error => console.log(error.message));
