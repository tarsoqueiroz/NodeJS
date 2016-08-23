/**
 * Created by USER: tarso.
 * On         DATE: 23/08/16.
 * By         NAME: writecode01.js.
 */

/**
 * New way to write a code
 */

module.exports = (params, callback) => {
  // A basic addition microservice
  let a = parseInt(params.args[0]);
  let b = parseInt(params.args[1]);
  callback(null, `${a} + ${b} = ${a + b}`);
};
