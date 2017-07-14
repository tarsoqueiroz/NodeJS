/**
 * Created by USER: tarso.
 * On         DATE: 13/07/17.
 * By         NAME: app.js.
 */

'use strict';

const redis = require('redis').createClient();

redis.set('hello', 'world', (err) => {
  if (err) { throw err; }
  redis.get('hello', (err, data) => {
    if (err) { throw err; }
    console.log(`Hello, ${data}!`); // outputs 'Hello, world!'
    redis.get('ola', (err, data) => {
      if (err) { throw err; }
      console.log(`Ola, ${data}!`);
      redis.quit();
    })
  });
});
