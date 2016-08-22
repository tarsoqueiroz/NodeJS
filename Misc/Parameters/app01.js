#!/usr/bin/env node
/**
 * Created by USER: tarso.
 * On         DATE: 19/08/16.
 * By         NAME: app01.js.
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

program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-B, --bacon-pepper-barbecue', 'Add bacon, pepper and bbq')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);

console.log('Variable "program":', program);