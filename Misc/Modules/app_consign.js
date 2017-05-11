/**
 * Created by USER: tarso.
 * On         DATE: 11/05/17.
 * By         NAME: app.js.
 */

'use strict';

const consign = require('consign');
var   app = {};

consign()
  .include('module_func')
  .then('module_var')
  .into(app)
;

console.log(app);

console.log('app.module_var.module_var                    :', app.module_var.module_var);

console.log('app.module_var.module_vars.strEn             :', app.module_var.module_vars.strEn);
console.log('app.module_var.module_vars.strEs             :', app.module_var.module_vars.strEs);
console.log('app.module_var.module_vars.strPtBr           :', app.module_var.module_vars.strPtBr);
console.log('app.module_var.module_vars.strDw             :', app.module_var.module_vars.strDw);

console.log('app.module_func.module_func                  :', app.module_func.module_func);

console.log('app.module_func.module_funcs_1.currentDate() :', app.module_func.module_funcs_1.currentDate());
console.log('app.module_func.module_funcs_1.currentTime() :', app.module_func.module_funcs_1.currentTime());

console.log('app.module_func.module_funcs_2.currentDate() :', app.module_func.module_funcs_2.currentDate());
console.log('app.module_func.module_funcs_2.currentTime() :', app.module_func.module_funcs_2.currentTime());
