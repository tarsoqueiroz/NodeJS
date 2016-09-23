/**
 * Created by tarsoqueiroz on 12/09/16.
 */

'use strict'

/**
 * Modules and variables
 */

var nCall;
var nPut;

/**
 * Code...
 */

/* The Black and Scholes (1973) Stock option formula */

function BlackScholes(S, X, T, v, r, PutCallFlag) {

  var d1, d2;
  d1 = (Math.log(S / X) + (r + v * v / 2.0) * T) / (v * Math.sqrt(T));
  d2 = d1 - v * Math.sqrt(T);


  if (PutCallFlag == "call")
    return S * CummulativeNormalDistribution(d1)-X * Math.exp(-r * T) * CummulativeNormalDistribution(d2);
  else
    return X * Math.exp(-r * T) * CummulativeNormalDistribution(-d2) - S * CummulativeNormalDistribution(-d1);

}

/* The cummulative Normal distribution function: */

function CummulativeNormalDistribution (x){

  var a1,
      a2,
      a3,
      a4,
      a5,
      k ;

  a1 =  0.31938153;
  a2 = -0.356563782;
  a3 =  1.781477937;
  a4 = -1.821255978;
  a5 =  1.330274429;

  if (x<0.0)
    return 1 - CummulativeNormalDistribution(-x);
  else
    k = 1.0 / (1.0 + 0.2316419 * x);

  return 1.0 - Math.exp(-x * x / 2.0)/ Math.sqrt(2*Math.PI) * k * (a1 + k * (-0.356563782 + k * (1.781477937 + k * (-1.821255978 + k * 1.330274429)))) ;

}


console.log('Calc 01');
nCall = BlackScholes(30, 34, .25, .2, .08, "call"); // 0.23834902311961947
nPut  = BlackScholes(30, 34, .25, .2, .08, "put"); // 3.5651039155492974
console.log('call (0.23834902311961947) :', nCall);
console.log('put  (3.5651039155492974)  :', nPut);

console.log('Calc 02');
nCall = BlackScholes(12.81, 13, (21/365), 0.4141, .1425, "call"); // 0.23834902311961947
nPut  = BlackScholes(12.81, 13, (21/365), 0.4141, .1425, "put");  // 3.5651039155492974
console.log('call (0.46822936305387586) :', nCall);
console.log('put  (0.5520828936691498)  :', nPut);

console.log('Calc 03');
nCall = BlackScholes(12.87, 13, (20/365), 0.4141, .1425, "call"); // 0.23834902311961947
nPut  = BlackScholes(12.87, 13, (20/365), 0.4141, .1425, "put");  // 3.5651039155492974
console.log('call (0.4837464921878265)  :', nCall);
console.log('put  (0.5126349072970466)  :', nPut);


/**
 * End of code
 */
