/**
 * Created by USER: tarso.
 * On         DATE: 10/05/17.
 * By         NAME: app.js.
 */

'use strict';

var strVar            = require('./module_var/module_var');
var strVars           = require('./module_var/module_vars');
var funcSingle        = require('./module_func/module_func');
var strFromFuncSingle = require('./module_func/module_func')();
var funcMultiple1     = require('./module_func/module_funcs_1');
var funcMultiple2     = require('./module_func/module_funcs_2');


console.log('strVar                      :', strVar);

console.log('strVars                     :', strVars);
console.log('strVars.strEn               :', strVars.strEn);
console.log('strVars.strEs               :', strVars.strEs);
console.log('strVars.strPtBr             :', strVars.strPtBr);

console.log('funcSingle()                :', funcSingle());
console.log('strFromFuncSingle           :', strFromFuncSingle);

console.log('funcMultiple1.currentDate() :', funcMultiple1.currentDate());
console.log('funcMultiple1.currentTime() :', funcMultiple1.currentTime());

console.log('funcMultiple2.currentDate() :', funcMultiple2.currentDate());
console.log('funcMultiple2.currentTime() :', funcMultiple2.currentTime());
