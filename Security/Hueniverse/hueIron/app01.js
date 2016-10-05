/**
 * Created by USER: tarso.
 * On         DATE: 04/10/16.
 * By         NAME: app01.js.
 */

'use strict';

var Iron = require('iron');

var strString = "This is a string!!!";

var password = 'some_not_random_password_that_is_at_least_32_characters';

Iron.seal(strString, password, Iron.defaults, function (err, sealed) {

  console.log('Sealed: ' + sealed);

  Iron.unseal(sealed, password, Iron.defaults, function (err, unsealed) {
    console.log('Unsealed: ' + unsealed);
  });

});
