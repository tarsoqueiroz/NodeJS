/**
 * Created by USER: tarso.
 * On         DATE: 29/11/16.
 * By         NAME: app03.
 *
 * Source     SITE: https://www.npmjs.com/package/http-digest-client
 */


var digest = require('http-digest-client').createDigestClient('tarso', 'password');
digest.request({
  host: 'proxy0.celepar.parana',
  path: '/',
  port: 8080,
  method: 'GET',
  headers: {  // Set any headers you want
    "User-Agent": "Simon Ljungberg",
    "Host":       "www.google.com"
  }
}, function (res) {
  res.on('data', function (data) {
    console.log(data.toString());
  });
  res.on('error', function (err) {
    console.log('oh noes');
  });
});
