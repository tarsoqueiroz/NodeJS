/**
 * Created by USER: tarso.
 * On         DATE: 05/01/17.
 * By         NAME: app02.
 */

'use strict';

var himalaya = require('himalaya');
var html = require('fs').readFileSync('lotofacil.html');
var json = himalaya.parse(html);


console.log('Parsing HTML page...');
for (var htmlElement in json) {
  if (json[htmlElement].tagName === 'html') {
    console.log('Found "HTML" tag...');
    var htmlTag = json[htmlElement];

    for (var bodyElement in htmlTag.children) {
      if (htmlTag.children[bodyElement].tagName === 'body') {
        console.log('Found "BODY" tag inside "HTML" tag...');
        var bodyTag = htmlTag.children[bodyElement];

        for (var tableElement in bodyTag.children) {
          if (bodyTag.children[tableElement].tagName === 'table') {
            console.log('Found "TABLE" tag inside "BODY" tag inside "HTML" tag...');
            var tableTag = bodyTag.children[tableElement];

            console.log('tagName     : ', tableTag.tagName);
            console.log('qty children: ', tableTag.children.length);
            console.log('children[1] : ', tableTag.children[1]);
            console.log('children[3] : ', tableTag.children[3]);
            console.log('children[5] : ', tableTag.children[5]);
            console.log('children[7] : ', tableTag.children[7]);
          }
        }
      }
    }
  }
}
