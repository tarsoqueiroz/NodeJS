/**
 * app01
 *
 * Author: tarso
 * Date  : 30/01/19
 * Source:
 */
'use strict';

// sintaxe CommonJS
const CJS = require('./libCommonJS.js');
const cjsFoo = CJS.foo;
const cjsBaz = CJS.baz;

// sintaxe ES6
import * as ES6 from './libES6.js';
const es6Foo = ES6.foo;
const es6Baz = ES6.baz;

// ou somente
import { foo, baz } from './libES6.js';

console.log(cjsFoo());
console.log(cjsBaz);
console.log(es6Foo());
console.log(es6Baz);
console.log(foo());
console.log(baz);
