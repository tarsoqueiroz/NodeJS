/**
 * Created by USER: tarso.
 * On         DATE: 20/11/17.
 * By         NAME: app.
 */

'use strict';

const otplib = require('otplib')

//const secret = otplib.authenticator.generateSecret()
const secret = "HFDTS5TZMVDUKRSUOJXWWNCXNRGHO2DK"
const token  = otplib.authenticator.generate(secret)

console.log(secret)
console.log(token)

const isValid1 = otplib.authenticator.check(123456, secret)
// or
const isValid2 = otplib.authenticator.verify({
  secret,
  token: 123456
})

console.log(isValid1)
console.log(isValid2)
