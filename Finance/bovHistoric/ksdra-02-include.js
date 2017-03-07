/**
 * Created by USER: tarso.
 * On         DATE: 06/03/17.
 * By         NAME: ksdra-02-include.js.
 */

'use strict';

const cassandra = require('cassandra-driver');
const ksdraClient = new cassandra.Client({ contactPoints: ['10.15.20.117'], keyspace: 'bovespa' });

var aParms = [];
var nRecords = 0;

var bPrintar = true;

const qryInsert = 'INSERT INTO opcoes (nomemi, esppap, datven, numser, tipmer, codpap, indica, fatcot, preexe, \
poscob, postra, posdes, postot, qtdcli, qtdlan, distri, estilo, tipati) \
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

var fs = require('fs');
var filename = 'ROPC20170303.dat';

var fd = fs.openSync(filename, 'r');
var bufferSize = 1024;
var buffer = new Buffer(bufferSize);
var nCount = 0;

var leftOver = '';
var strRead, strLine, idxStart, idx, strTipoReg;

while ((strRead = fs.readSync(fd, buffer, 0, bufferSize, null)) !== 0) {
  leftOver += buffer.toString('utf8', 0, strRead);
  idxStart = 0;
  while ((idx = leftOver.indexOf("\n", idxStart)) !== -1) {
    strLine = leftOver.substring(idxStart, idx);
    nCount++;
    console.log(nCount + "one line read: " + strLine.substring(0, 20));

    strTipoReg = strLine.substring(0, 2);

    if (strTipoReg === '00') {

      console.log('Header');
      console.log('  Nome do arquivo   :', strLine.substring( 2, 10));
      console.log('  Codigo da origem  :', strLine.substring(10, 18));
      console.log('  Codigo do destino :', strLine.substring(18, 22));
      console.log('  Data de geracao   :', strLine.substring(22, 30));
      console.log('  Data do movimento :', strLine.substring(30, 38));

    } else if (strTipoReg === '01') {

      aParms = [];

      aParms.push(strLine.substring(  2, 14));
      aParms.push(strLine.substring( 14, 24));
      aParms.push(strLine.substring( 24, 32));
      aParms.push(parseFloat(strLine.substring( 32, 39)));
      aParms.push(parseFloat(strLine.substring( 39, 42)));
      aParms.push(strLine.substring( 42, 54));
      aParms.push(parseFloat(strLine.substring( 54, 55)));
      aParms.push(parseFloat(strLine.substring( 56, 62)));
      aParms.push(parseFloat(strLine.substring( 62, 75))/100);
      aParms.push(parseFloat(strLine.substring( 75, 90)));
      aParms.push(parseFloat(strLine.substring( 90,105)));
      aParms.push(parseFloat(strLine.substring(105,120)));
      aParms.push(parseFloat(strLine.substring(120,135)));
      aParms.push(parseFloat(strLine.substring(135,142)));
      aParms.push(parseFloat(strLine.substring(142,149)));
      aParms.push(parseFloat(strLine.substring(149,152)));
      aParms.push(strLine.substring(152,153));
      aParms.push(strLine.substring(153,156));

      nRecords++;

      ksdraClient.execute(qryInsert, aParms, { prepare: true }, function(err, result) {

        if (err) {

          console.log(err);

        } else if (bPrintar) {

          console.log(result);
          bPrintar = false;

        }
      });

//      console.log(aParms);

    } else if (strTipoReg === '99') {

      console.log('Trailer');
      console.log('  Nome do arquivo   :', strLine.substring( 2, 10));
      console.log('  Codigo da origem  :', strLine.substring(10, 18));
      console.log('  Codigo do destino :', strLine.substring(18, 22));
      console.log('  Data de geracao   :', strLine.substring(22, 30));
      console.log('  Total de registros:', parseInt(strLine.substring(30, 39)));

    }

    idxStart = idx + 1;
  }
  leftOver = leftOver.substring(idxStart);
};
