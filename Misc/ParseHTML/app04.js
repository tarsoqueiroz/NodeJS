/**
 * Created by USER: tarso.
 * On         DATE: 05/01/17.
 * By         NAME: app04.js.
 *
 * Source: https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping
 *         https://github.com/cheeriojs/cheerio
 */

'use strict';

var cheerio = require('cheerio');
var fs      = require('fs');


var pageLotoFacil = fs.readFileSync('lotofacil.html').toString();
var $             = cheerio.load(pageLotoFacil);

console.log($('table'));

/*
var $ = require('cheerio')
var fs = require('fs')

var parsedHTML = $.load(pageLotoFacil);

console.log(parsedHTML);


let cheerio = require('cheerio')
let $ = cheerio.load('<h2 class="title">Hello world</h2>')

$('h2.title').text('Hello there!')
$('h2').addClass('welcome')

$.html()
//=> <h2 class="title welcome">Hello there!</h2>

  */