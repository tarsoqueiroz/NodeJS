/**
 * Created by USER: tarso.
 * On         DATE: 14/07/17.
 * By         NAME: jobsched.js.
 */

'use strict';

const redis = require('redis').createClient();
const JOBS = 'jobs'; // Sorted Set

redis.zadd(JOBS, Date.now() + 5 * 1000, 'email user 1');
redis.zadd(JOBS, Date.now() + 10 * 1000, 'email user 2');

setInterval(() => {
  let now = Date.now();
  redis.zrangebyscore(JOBS, 0, now, (err, jobList) => { // get jobs until now
    redis.zremrangebyscore(JOBS, 0, now, (err) => { // delete jobs until now
      console.log('jobs', jobList.length ? jobList : 'N/A', process.pid); // perform work
    });
  });
}, 1 * 1000);
