/**
 * Created by USER: tarso.
 * On         DATE: 03/10/16.
 * By         NAME: app02.js.
 *
 *          SOURCE: https://www.npmjs.com/package/ntp-client
 */

var ntpClient = require('ntp-client');

ntpClient.getNetworkTime("ntp.pr.gov.br", 123, function(err, date) {
  if(err) {
    console.error(err);
    return;
  }

  console.log('Current time : ' + date); // Mon Jul 08 2013 21:31:31 GMT+0200 (Paris, Madrid (heure d’été))
  console.log('NodeJS Date  : ' + new Date());
});

