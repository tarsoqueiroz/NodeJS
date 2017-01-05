/**
 * Created by USER: tarso.
 * On         DATE: 05/01/17.
 * By         NAME: app01.
 *
 * Source: https://github.com/andrejewski/himalaya
 */

'use strict';

var himalaya = require('himalaya');
var html = "<!DOCTYPE html><html><head><title>Page Title</title></head><body><h1>This is a Heading</h1><p>This is a paragraph.</p></body></html>";
var json = himalaya.parse(html);

console.log(json[1][1]);
