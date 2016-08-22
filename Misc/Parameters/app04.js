#!/usr/bin/env node
/**
 * Created by USER: tarso.
 * On         DATE: 19/08/16.
 * By         NAME: app04.js.
 *
 * Source ref.    : https://github.com/tj/commander.js
 */

/**
 * COMMANDER
 */

/**
 * Module dependencies.
 */

var program = require('commander');

function parseMethod(sMethod) {
  if        (sMethod.toUpperCase() === 'G' || sMethod.toUpperCase() === 'GET') {
    sMethod = 'G';
  } else if (sMethod.toUpperCase() === 'P' || sMethod.toUpperCase() === 'POST') {
    sMethod = 'P';
  } else if (sMethod.toUpperCase() === 'U' || sMethod.toUpperCase() === 'UPDATE') {
    sMethod = 'U';
  } else if (sMethod.toUpperCase() === 'D' || sMethod.toUpperCase() === 'DELETE') {
    sMethod = 'D';
  } else
  {
    sMethod = '?';
  }
  return sMethod;
}

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .option('-m, --method <GET|G|POST|P|UPDATE|U|DELETE|D>', 'A HTTP method', parseMethod)
  .parse(process.argv);

console.log(' Method: %j', program.method);
console.log(' args: %j', program.args);
