const csv=require('csvtojson');

const strOptions = '';
const csvFile = './optpetrf21.csv';
var nQtd = 0;

csv({
  noheader: false,
  trim: true,
  delimiter: ['\t', ','],
//  headers: ["DATE","TIME","OPEN","HIGH","LOW","CLOSE","TICKVOL","VOL","SPREAD"]
  headers: ["DATE","TIME","BID","ASK","LAST","VOLUME"]
})
  .fromFile(csvFile)
  .on('json',(jsonObj)=>{ // this func will be called 3 times
    console.log(jsonObj) // => [1,2,3] , [4,5,6]  , [7,8,9]
    nQtd += 1;
  })
  .on('done',()=>{
    //parsing finished
    console.log('done');
    console.log(nQtd);
  });