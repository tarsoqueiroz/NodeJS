/**
 * Created by USER: tarso.
 * On         DATE: 29/08/16.
 * By         NAME: app01.js.
 */

/**
 * black-scholes
 *
 * Source: https://www.npmjs.com/package/black-scholes
 */

'use strict'

var bs = require("black-scholes");
var nCall;
var nPut;
var nS;          // Current price of the underlying
var nK;          // Strike price
var nTime;       // Time to expiration in years
var nVolatility; // Volatility as a decimal
var nRisk;       // Annual risk-free interest rate as a decimal
var strType;     // The type of option to be priced - "call" or "put"
var nCall;       // Value of Call stock option
var nPut;        // Value of Put stock option

console.log('Calc 01');
nCall = bs.blackScholes(30, 34, .25, .2, .08, "call"); // 0.23834902311961947
nPut  = bs.blackScholes(30, 34, .25, .2, .08, "put"); // 3.5651039155492974
console.log('call (0.23834902311961947) :', nCall);
console.log('put  (3.5651039155492974)  :', nPut);

console.log('Calc 02');
nCall = bs.blackScholes(12.81, 13, (21/365), 0.4141, .1425, "call"); // 0.23834902311961947
nPut  = bs.blackScholes(12.81, 13, (21/365), 0.4141, .1425, "put");  // 3.5651039155492974
console.log('call (0.46822936305387586) :', nCall);
console.log('put  (0.5520828936691498)  :', nPut);

console.log('Calc 03');
nCall = bs.blackScholes(12.87, 13, (20/365), 0.4141, .1425, "call"); // 0.23834902311961947
nPut  = bs.blackScholes(12.87, 13, (20/365), 0.4141, .1425, "put");  // 3.5651039155492974
console.log('call (0.4837464921878265)  :', nCall);
console.log('put  (0.5126349072970466)  :', nPut);
