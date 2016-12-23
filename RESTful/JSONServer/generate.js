/**
 * Created by USER: tarso.
 * On         DATE: 23/12/16.
 * By         NAME: generate.
 *
 * Source: https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server
 */

'use strict';

// module.exports = function () {
var genFake = function () {
  var faker = require('faker');
  // sets locale to de
  faker.locale = "pt_BR";
  var _ = require('lodash');

  return {
    people: _.times(10, function (n) {
      return {
        id: n,
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        email: faker.internet.email(),
        photo: faker.internet.avatar()
      }
    })
  }
}

console.log(genFake());
