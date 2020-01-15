/**
 * app2c
 *
 * Created by tarso on 07/12/18
 */
'use strict';

var keepsHisWord = false;

var promise3 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesn't want to keep his word");
  }
});

promise3
  .then(message => console.log(message))
  .catch(error => console.log(error));
