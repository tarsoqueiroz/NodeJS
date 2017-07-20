/**
 * Created by USER: tarso.
 * On         DATE: 20/07/17.
 * By         NAME: app.js.
 */

'use strict';

require('console.table');

var jsonInfo1 =  [
  {
    "name": "Tarso",
    "surname": "Queiroz",
    "male": true,
    "age": 50
  },
  {
    "name": "Mary",
    "surname": "Silva",
    "male": false,
    "age": 21
  },
  {
    "name": "Pedro",
    "surname": "Gates",
    "male": true,
    "age": 72
  }
];
var jsonInfo2 =  [
  {
    "name": "Tarso",
    "surname": "Queiroz",
    "male": true,
    "age": 50
  },
  {
    "name": "Mary",
    "nickname": "MSilva",
    "fullname": "Mary Silva",
    "male": false,
    "age": 21
  },
  {
    "name": "Pedro",
    "fullname": "Pedro Gates",
    "male": true,
    "birthday": "1944/06/07"
  }
];

console.log('*** Unformated JSON jsonInfo1 ***');
console.log(jsonInfo1);
console.log('*** Formated JSON jsonInfo1 ***')
console.table(jsonInfo1);

console.log('*** Unformated JSON jsonInfo2 ***');
console.log(jsonInfo2);
console.log('*** Formated JSON jsonInfo2 ***')
console.table(jsonInfo2);
