/**
 * Created by USER: tarso.
 * On         DATE: 15/08/16.
 * By         NAME: app.js.
 */

var fs = require('fs'),
  readline = require('readline');

var rd = readline.createInterface({
  input: fs.createReadStream('./file.txt'),
  output: process.stdout,
  terminal: false
});

var strRecord, strData, strStock, strPreAbe, strPreMax, strPreMin, strPreMed, strPreUlt, strQuaTot, strVolTot;

rd.on('line', function(strLine) {
//  strData   = strLine.substring(  2,  10);

  strData   = Math.floor(new Date(strLine.substring(2, 10).replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3T18:00:00.00-03:00')))*1000000;

//'2016-08-15T18:00:00.00-03:00'

  strStock  = strLine.substring( 12,  24);
  strPreAbe = parseInt(strLine.substring( 56,  69))/100;
  strPreMax = parseInt(strLine.substring( 69,  82))/100;
  strPreMin = parseInt(strLine.substring( 82,  95))/100;
  strPreMed = parseInt(strLine.substring( 95, 108))/100;
  strPreUlt = parseInt(strLine.substring(108, 121))/100;
  strQuaTot = parseInt(strLine.substring(152, 170));
  strVolTot = parseInt(strLine.substring(170, 188))/100;

  strRecord = 'open,stock=' + strStock + ' value=' + strPreAbe + ' ' + strData;
  console.log(strRecord);
  strRecord = 'maximum,stock=' + strStock + ' value=' + strPreMax + ' ' + strData;
  console.log(strRecord);
  strRecord = 'minimum,stock=' + strStock + ' value=' + strPreMin + ' ' + strData;
  console.log(strRecord);
  strRecord = 'medium,stock=' + strStock + ' value=' + strPreMed + ' ' + strData;
  console.log(strRecord);
  strRecord = 'last,stock=' + strStock + ' value=' + strPreUlt + ' ' + strData;
  console.log(strRecord);
  strRecord = 'operations,stock=' + strStock + ' value=' + strQuaTot + ' ' + strData;
  console.log(strRecord);
  strRecord = 'volume,stock=' + strStock + ' value=' + strVolTot + ' ' + strData;
  console.log(strRecord);
});
