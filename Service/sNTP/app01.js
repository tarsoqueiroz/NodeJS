/**
 * Created by USER: tarso.
 * On         DATE: 03/10/16.
 * By         NAME: app01.js.
 *
 *          SOURCE: https://github.com/hueniverse/sntp
 */


var Sntp = require('sntp');

// All options are optional

var options = {
  host: 'ntp.pr.gov.br',  // Defaults to pool.ntp.org
  port: 123,                      // Defaults to 123 (NTP)
  resolveReference: true,         // Default to false (not resolving)
  timeout: 1000                   // Defaults to zero (no timeout)
};

// Request server time
Sntp.time(options, function (err, time) {

  if (err) {
    console.log('Failed: ' + err.message);
    process.exit(1);
  }

  console.log('Local clock is off by: ' + time.t + ' milliseconds');
  console.log(('Show time JSON      : ' + time.toString() ));
//  process.exit(0);
});

