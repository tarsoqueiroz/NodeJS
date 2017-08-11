/**
 * Created by USER: tarso.
 * On         DATE: 11/08/17.
 * By         NAME: app01.js.
 */

'use strict';

// escopo de função com var
function doSomething() {
  var a = 1;
  if (true) {
    var b = 2; // b é declarado dentro do if mas é visível fora
  }
  var c = a + b; // 3
}

//escopo de bloco com let
function doSomethingElse() {
  let a = 1
  if (true) {
    let b = 2 // b é declarado dentro do if e não é visível fora
  }
  let c = a + b // Uncaught ReferenceError: b is not defined
}

doSomething();
doSomethingElse();