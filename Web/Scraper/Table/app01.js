/**
 * Created by tarsoqueiroz on 22/01/17.
 *
 * Source: https://www.npmjs.com/package/table-scraper
 */


var scraper = require('table-scraper');

scraper
    .get('http://localhost:8888/D_LOTFAC.HTM')
    .then(function(tableData) {
        /*
         tableData ===
         [
         [
         { State: 'Minnesota', 'Capitol City': 'Saint Paul', 'Pop.': '3' },
         { State: 'New York', 'Capitol City': 'Albany', 'Pop.': 'Eight Million' }
         ]
         ]
         */
        console.log(tableData);
        });
