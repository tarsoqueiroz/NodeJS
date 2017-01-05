/**
 * Created by USER: tarso.
 * On         DATE: 05/01/17.
 * By         NAME: app03
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

//            for (var rowElement in tableTag.children[1])

            console.log('tagName                 : ', tableTag.tagName);
            console.log('qty children            : ', tableTag.children.length);
            console.log('children[1].children    : ', tableTag.children[1].children[1].tagName);
            console.log('children[1].children    : ', tableTag.children[1].children[1].children[0].children[0].children[0]);
            console.log('children[1].children    : ', tableTag.children[1].children[3].tagName);
            console.log('children[1].children    : ', tableTag.children[1].children[3].children[0].children[0].children[0]);
          }
        }
      }
    }
  }
}
