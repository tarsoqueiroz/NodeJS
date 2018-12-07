/**
 * app02b
 *
 * Created by tarso on 07/12/18
 */
'use strict';

var promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({
      message: "The man likes to keep his word",
      code: "aManKeepsHisWord"
    });
  }, 2 * 1000);
});

promise2
  .then(message => console.log(message))
  .catch(error => console.log(error.message));
