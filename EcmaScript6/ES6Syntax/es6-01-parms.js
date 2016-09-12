/**
 * Created by tarsoqueiroz on 05/09/16.
 *
 * Source: http://webapplog.com/es6/
 */
'use strict';

/**
 * Modules and variables
 */
var defVariables = function (nVar1 = 1, strVar2 = 'String strVar2', cVar3 = 'c') {

  console.log('--- Parameters ---');
  console.log('nVar1   =', nVar1);
  console.log('strVar2 =', strVar2);
  console.log('cVar3   =', cVar3);
};

/**
 * Code...
 */

defVariables();
defVariables(2);
defVariables(3, 'New string for strVar2');
defVariables(4, 'Other string for strVar2', 'Z');

/**
 * End of code
 */
