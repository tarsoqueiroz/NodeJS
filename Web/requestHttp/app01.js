/**
 * Created by USER: tarso.
 * On         DATE: 24/11/16.
 * By         NAME: app01.js.
 *
 * Source     SITE: https://github.com/request/request
 */

var request = require('request');

request('http://www.celepar.pr.gov.br', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the CELEPAR homepage.
  }
})
