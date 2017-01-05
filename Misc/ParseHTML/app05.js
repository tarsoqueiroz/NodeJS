/**
 * Created by USER: tarso.
 * On         DATE: 05/01/17.
 * By         NAME: app05.js.
 */

'use strict';

const cheerio = require("cheerio");

// Parse the HTML
var $ = cheerio.load('<h2 class="title">Hello world</h2> <h2 class="title">Hello motherfucker world</h2> <h2 class="title2">Hello everybody world</h2>');

console.log($('h2.title').text());
console.log($('h2').text());

$('h2.title').each(function () {
  console.log($('h2.title', this).toString());
})


// 3. Extract the data
Object.keys(data).forEach(k => {
  pageData[k] = $(data[k]).text();
});



// => Hello world