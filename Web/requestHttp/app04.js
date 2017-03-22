/**
 * Created by USER: tarso.
 * On         DATE: 21/03/17.
 * By         NAME: app04.js.
 */

'use strict';

var request = require('request');

var options = {
  uri: 'http://www.neocep.pr.gov.br/cep/api/v1.0/enderecamento/paises' /*,
   auth: {
   user: 'test',
   pass: 'test',
   sendImmediately: false
   } */
};

request(options, function(error, response, body){
  if (!error && response.statusCode == 200){
    let aCountry = JSON.parse(body);

    console.log(aCountry.length);
    console.log(aCountry[0]);
    console.log(aCountry[0].sigla);
    console.log(aCountry[aCountry.length-1].nome);
  }
  else{
//    console.log('Code : ' + response.statusCode);
    console.log('error : ' + error);
    console.log('body : ' + body);
  }
});

