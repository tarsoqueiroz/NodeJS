/**
 * Created by USER: tarso.
 * On         DATE: 15/03/17.
 * By         NAME: generatefakedata.js.
 */

'use strict';

// module.exports = function () {
var genFake = function () {
  var faker = require('faker');
  // sets locale to de
  faker.locale = "pt_BR";
  var _ = require('lodash');

  return {
    people: _.times(521, function (n) {
      var strId = faker.random.uuid();
      var strName = faker.name.firstName();
      var strSurname = faker.name.lastName();
      var nAge = 18 + faker.random.number() % 67;
      var strEmail = (strName + '.' + strSurname + '@' + faker.internet.email().split('@')[1]).toLowerCase().replace(/\s/g,'');
      var strPhone = faker.phone.phoneNumber();
      var strPhoto = faker.internet.avatar();

      return {
        id: strId,
        name: strName,
        surname: strSurname,
        age: nAge,
        email: strEmail,
        phone: strPhone,
        photo: strPhoto
      }
    })
  }
}

console.log(genFake());
