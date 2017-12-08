/**
 * Created by USER: tarso
 * On         DATE: 04/12/17
 * By         NAME: app.js
 */

'use strict';

const otplib = require('otplib')

const otpNewSecret = otplib.authenticator.generateSecret()
const otpLibSecret = "J5KVQQ3HKV2GGTKJJJ2HASCRJ5XWUQLR"
console.log("(1) otpNewSecret.......................:", otpNewSecret)
console.log("(2) otpLibSecret.......................:", otpLibSecret)

const otpTokenNewSecret  = otplib.authenticator.generate(otpNewSecret)
const otpTokenLibSecret  = otplib.authenticator.generate(otpLibSecret)
console.log("(3) Token otpNewSecret.................:", otpTokenNewSecret)
console.log("(4) Token otpTokenLibSecret............:", otpTokenLibSecret)

const passTOTP = 692413
console.log("(5) passTOTP...........................:", passTOTP)

const isValidNewSecret = otplib.authenticator.check(passTOTP, otpNewSecret)

const isValidLibSecret = otplib.authenticator.verify({
  secret: otpLibSecret,
  token: passTOTP
})

console.log("(6) Token NewSecret vs passTOTP valid? :", isValidNewSecret)
console.log("(7) Token LibSecret vs passTOTP valid? :", isValidLibSecret)


