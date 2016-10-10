/**
 * Created by USER: tarso.
 * On         DATE: 10/10/16.
 * By         NAME: async03.js.
 */

var async = require('async');

async.series([
  function(callback) {
    console.log('Series task 1 in');
    setTimeout(function() {
      console.log('Series task 1 time');
      callback(null, 1);
      console.log('Series task 1 out');
    }, 2500);
  },
  function(callback) {
    console.log('Series task 2 in');
    setTimeout(function() {
      console.log('Series task 2 time');
      callback(null, 2);
    }, 1500);
    console.log('Series task 2 out');
  },
  function(callback) {
    console.log('Series task 3 in');
    setTimeout(function() {
      console.log('Series task 3 time');
      callback(null, 3);
    }, 1000);
    console.log('Series task 3 out');
  }
], function(error, results) {
  console.log(results);
});

async.parallel([
  function(callback) {
    console.log('Parallel task 1 in');
    setTimeout(function() {
      console.log('Parallel task 1 time');
      callback(null, 1);
    }, 4000);
    console.log('Parallel task 1 out');
  },
  function(callback) {
    console.log('Parallel task 2 in');
    setTimeout(function() {
      console.log('Parallel task 2 time');
      callback(null, 2);
    }, 3000);
    console.log('Parallel task 2 out');
  },
  function(callback) {
    console.log('Parallel task 3 in');
    setTimeout(function() {
      console.log('Parallel task 3 time');
      callback(null, 3);
    }, 2000);
    console.log('Parallel task 3 out');
  }
], function(error, results) {
  console.log(results);
});
