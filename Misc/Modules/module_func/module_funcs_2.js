/**
 * Created by USER: tarso.
 * On         DATE: 10/05/17.
 * By         NAME: module-func.js.
 */

'use strict';

module.exports.currentDate = function () {

  var dtDate = new Date();

  return dtDate;
};

module.exports.currentTime = function () {

  var dtDate = new Date();

  return dtDate.getTime();
};
