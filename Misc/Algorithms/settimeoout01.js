/**
 * Created by USER: tarso.
 * On         DATE: 10/10/16.
 * By         NAME: settimeoout01.js.
 */

setTimeout(function () {
  console.log('boo start', new Date())
}, 100);

var end = Date.now() + 2000
while (Date.now() < end);

console.log('imma let you finish but blocking the event loop is the best bug of all TIME', new Date());

setTimeout(function () {
  console.log('boo final', new Date());
}, 3000);

