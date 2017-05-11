/**
 * Created by USER: tarso.
 * On         DATE: 04/05/17.
 * By         NAME: app.js.
 */

'use strict';

const consign = require('consign');
var   cfg1a   = {};
var   cfg1b   = {};
var   cfg2    = {};

consign()
  .include('config/users')
  .into(cfg1a)
;
consign()
  .include('config/dbs')
  .into(cfg1b)
;
consign()
  .include('config')
  .into(cfg2)
;

console.log('==== Users ====');
console.log('cfg1a                     :', cfg1a);
console.log('cfg1a.config.users.admin  :', cfg1a.config.users.admin);

console.log('==== DBs ====');
console.log('cfg1b                                     :', cfg1b);
console.log('cfg1b.config.dbs.dbMongo                  :', cfg1b.config.dbs.dbMongo);
console.log('cfg1b.config.dbs.dbMongo.credentials.user :', cfg1b.config.dbs.dbMongo.credentials.user);

console.log('==== cfg2 ====');
console.log('cfg2                     :', cfg2);

console.log('==== cfg2 Users ====');
console.log('cfg2.config.users.admin  :', cfg2.config.users.admin);

console.log('==== cfg2 DBs ====');
console.log('cfg2.config.dbs.dbMongo                  :', cfg2.config.dbs.dbMongo);
console.log('cfg2.config.dbs.dbMongo.credentials.user :', cfg2.config.dbs.dbMongo.credentials.user);
