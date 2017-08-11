/**
 * Created by USER: tarso.
 * On         DATE: 11/08/17.
 * By         NAME: app.js.
 */

'use strict';

const cktBreaker = require('ckt-breaker');
// Function that hits some service
const fn = () => Promise.reject('I got nothing');

const ckt = cktBreaker(fn, {
  retry: 10000, // time in ms after which to retry hitting fn
  timeout: 1000, // time in ms to timeout if fn takes longer than that
  maxError: 10, // Max no of errors
  maxTime: 1000, // time in ms in which maxError occurs
  fallback: () => Promise.reject(new Error('Service Currently unavailable')),
});

ckt.fire('hello world') // Safe doesn't overload the remote service
