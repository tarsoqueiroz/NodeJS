/**
 * Created by USER: tarso.
 * On         DATE: 03/03/17.
 * By         NAME: ksdra-99-b-test.js.
 */

'use strict';

var fs = require('fs');
var filename = 'COTAHIST_M092016.TXT';

var fd = fs.openSync(filename, 'r');
var bufferSize = 1024;
var buffer = new Buffer(bufferSize);
var nCount = 0;

var leftOver = '';
var strRead, strLine, idxStart, idx;
while ((strRead = fs.readSync(fd, buffer, 0, bufferSize, null)) !== 0) {
  leftOver += buffer.toString('utf8', 0, strRead);
  idxStart = 0;
  while ((idx = leftOver.indexOf("\n", idxStart)) !== -1) {
    strLine = leftOver.substring(idxStart, idx);
    nCount++;
    console.log(nCount + "one line read: " + strLine.substring(0, 20));
    idxStart = idx + 1;
  }
  leftOver = leftOver.substring(idxStart);
};

