/**
 * Created by USER: tarso.
 * On         DATE: 10/10/16.
 * By         NAME: async04.js.
 */

var async = require('async');

var aNumbers = [];
for (i = 0; i < 111; i++) {
  aNumbers.push(i);
};
var afShowValue = [];

var fShowValue = function (nStart, nInc, callback) {
  console.log('Start:', nStart, '  Increment:', nInc);
  for (nSx1 = nStart; nSx1 < aNumbers.length; nSx1 += nInc) {
    console.log('Element [', nSx1, ']: ', aNumbers[nSx1]);
    for (j = 0; j < Math.floor(Math.random() * 5000000000); j++) {};
  }
};
const nTasks = 2;

console.log(aNumbers);

for (var i = 0; i < nTasks; i++) {
  afShowValue.push(fShowValue.bind(null, i, nTasks));
}

async.parallel(
  afShowValue, 
  function (err, res) {
    console.log(err, res);
  });
