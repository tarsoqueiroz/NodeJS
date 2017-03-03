/**
 * Created by USER: tarso.
 * On         DATE: 21/02/17.
 * By         NAME: ksdra-01-include.js.
 */

'use strict';

const cassandra = require('cassandra-driver');
const ksdraClient = new cassandra.Client({ contactPoints: ['10.15.20.117'], keyspace: 'bovespa' });

var aParms = [];
var nRecords = 0;

var bPrintar = true;

const qryInsert = 'INSERT INTO cotacoes (data, codbdi, codneg, tpmerc, nomres, especi, prazot, modref, preabe, premax, \
premin, premed, preult, preofc, preofv, totneg, quatot, voltot, preexe, indopc, datven, fatcot, \
ptoexe, codisi, dismes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, \
?, ?, ?)';

var fs = require('fs');
var filename = 'COTAHIST_M092016.TXT';

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
      console.log('  Nome do arquivo   :', strLine.substring( 2, 15));
      console.log('  Codigo da origem  :', strLine.substring(15, 23));
      console.log('  Data de geracao   :', strLine.substring(23, 31));

    } else if (strTipoReg === '01') {

      aParms = [];

      aParms.push(strLine.substring(  2, 10));
      aParms.push(strLine.substring( 10, 12));
      aParms.push(strLine.substring( 12, 24));
      aParms.push(parseInt(strLine.substring( 24, 27)));
      aParms.push(strLine.substring( 27, 39));
      aParms.push(strLine.substring( 39, 49));
      aParms.push(strLine.substring( 49, 52));
      aParms.push(strLine.substring( 52, 56));
      aParms.push(parseFloat(strLine.substring( 56, 69))/100);
      aParms.push(parseFloat(strLine.substring( 69, 82))/100);
      aParms.push(parseFloat(strLine.substring( 82, 95))/100);
      aParms.push(parseFloat(strLine.substring( 95,108))/100);
      aParms.push(parseFloat(strLine.substring(108,121))/100);
      aParms.push(parseFloat(strLine.substring(121,134))/100);
      aParms.push(parseFloat(strLine.substring(134,147))/100);
      aParms.push(parseInt(strLine.substring(147,152)));
      aParms.push(parseInt(strLine.substring(152,170)));
      aParms.push(parseFloat(strLine.substring(170,188))/100);
      aParms.push(parseFloat(strLine.substring(188,201))/100);
      aParms.push(parseInt(strLine.substring(201,202)));
      aParms.push(strLine.substring(202,210));
      aParms.push(parseInt(strLine.substring(210,217)));
      aParms.push(parseFloat(strLine.substring(217,230))/100);
      aParms.push(strLine.substring(230,242));
      aParms.push(parseInt(strLine.substring(242,245)));

      nRecords++;

      ksdraClient.execute(qryInsert, aParms, { prepare: true }, function(err, result) {

        if (err) {

          console.log(err);

        } else if (bPrintar) {

          console.log(result);
          bPrintar = false;

        }
      });

    } else if (strTipoReg === '99') {

      console.log('Trailer');
      console.log('  Nome do arquivo   :', strLine.substring( 2, 15));
      console.log('  Codigo da origem  :', strLine.substring(15, 23));
      console.log('  Data de geracao   :', strLine.substring(23, 31));
      console.log('  Total de registros:', parseInt(strLine.substring(31, 42)));

    }

    idxStart = idx + 1;
  }
  leftOver = leftOver.substring(idxStart);
};
