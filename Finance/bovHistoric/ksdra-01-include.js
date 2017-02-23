/**
 * Created by USER: tarso.
 * On         DATE: 21/02/17.
 * By         NAME: ksdra-01-include.js.
 */

'use strict';

const fs = require('fs');
const readline = require('readline');
const cassandra = require('cassandra-driver');
const ksdraClient = new cassandra.Client({ contactPoints: ['10.15.20.117'], keyspace: 'bovespa' });

var rd = readline.createInterface({
  input: fs.createReadStream('./COTAHIST_M092016.TXT'),
  output: process.stdout,
  terminal: false
});

var strTipoReg, strData, strCodBDI, strCodNeg, nTpMerc, strNomRes, strEspeci, strPrazoT, strModRef, dPreAbe, dPreMax,
    dPreMin, dPreMed, dPreUlt, dPreOfC, dPreOfV, nTotNeg, nQuaTot, dVolTot, dPreExe, nIndOpc, strDatVen,
    iFatCot, dPtoExe, strCodIsi, dDisMes;

var aParms = [];
var nRecords = 0;

var bPrintar = true;

const qryInsert = 'INSERT INTO cotacoes (data, codbdi, codneg, tpmerc, nomres, especi, prazot, modref, preabe, premax, \
premin, premed, preult, preofc, preofv, totneg, quatot, voltot, preexe, indopc, datven, fatcot, \
ptoexe, codisi, dismes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, \
?, ?, ?)';

rd.on('line', function(strLine) {
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

//    ksdraClient.execute(qryInsert, aParms, { prepare: true })
//      .then(result => console.log(nRecords));

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
});



/*
 strData   = strLine.substring(  2, 10);
 strCodBDI = strLine.substring( 10, 12);
 strCodNeg = strLine.substring( 12, 24);
 nTpMerc   = parseInt(strLine.substring( 24, 27));
 strNomRes = strLine.substring( 27, 39);
 strEspeci = strLine.substring( 39, 49);
 strPrazoT = strLine.substring( 49, 52);
 strModRef = strLine.substring( 52, 56);
 dPreAbe   = parseFloat(strLine.substring( 56, 69))/100;
 dPreMax   = parseFloat(strLine.substring( 69, 82))/100;
 dPreMin   = parseFloat(strLine.substring( 82, 95))/100;
 dPreMed   = parseFloat(strLine.substring( 95,108))/100;
 dPreUlt   = parseFloat(strLine.substring(108,121))/100;
 dPreOfC   = parseFloat(strLine.substring(121,134))/100;
 dPreOfV   = parseFloat(strLine.substring(134,147))/100;
 nTotNeg   = parseInt(strLine.substring(147,152));
 nQuaTot   = parseInt(strLine.substring(152,170));
 dVolTot   = parseFloat(strLine.substring(170,188))/100;
 dPreExe   = parseFloat(strLine.substring(188,201))/100;
 nIndOpc   = parseInt(strLine.substring(201,202));
 strDatVen = strLine.substring(202,210);
 iFatCot   = parseInt(strLine.substring(210,217));
 dPtoExe   = parseFloat(strLine.substring(217,230))/100;
 strCodIsi = strLine.substring(230,242);
 dDisMes   = parseInt(strLine.substring(242,245));

 console.log('-------');
 console.log(strTipoReg);
 console.log(strData);
 console.log(strCodBDI);
 console.log(strCodNeg);
 console.log(nTpMerc);
 console.log(strNomRes);
 console.log(strEspeci);
 console.log(strPrazoT);
 console.log(strModRef);
 console.log(dPreAbe);
 console.log(dPreMax);
 console.log(dPreMin);
 console.log(dPreMed);
 console.log(dPreUlt);
 console.log(dPreOfC);
 console.log(dPreOfV);
 console.log(nTotNeg);
 console.log(nQuaTot);
 console.log(dVolTot);
 console.log(dPreExe);
 console.log(nIndOpc);
 console.log(strDatVen);
 console.log(iFatCot);
 console.log(dPtoExe);
 console.log(strCodIsi);
 console.log(dDisMes);
 console.log('-------');
 */

