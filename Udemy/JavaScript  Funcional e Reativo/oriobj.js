
class Persona {

  constructor(fullName = '', userName = '', emailAddr = '') {

    this.fullName = fullName
    this.userName = userName
    this.emailAddr = emailAddr

  }

  get fullName() {
    return this._fullName
  }
  set fullName(fullName) {
    this._fullName = fullName.toUpperCase()
  }
  get userName() {
    return this._userName
  }
  set userName(userName) {
    this._userName = userName.toLowerCase()
  }
  get emailAddr() {
    return this._emailAddr
  }
  set emailAddr(emailAddr) {
    this._emailAddr = emailAddr.toLowerCase()
  }

}

Persona.prototype.log = function() {
  console.log(`User: ${this.fullName} (${this.userName} / ${this.emailAddr})`)
}



let userID = new Persona('Tarso Queiroz', 'tarso', 'tarso@email.com')

//console.log(`User: ${userID.fullName} (${userID.userName} / ${userID.emailAddr})`)
userID.log()

userID.fullName = 'Tarso Dutra Blitzkow de queiroz'
userID.userName = 'TarsoQueiroz'
userID.emailAddr = 'TARSO@EMAIL.COM.BR'
//console.log(`User: ${userID.fullName} (${userID.userName} / ${userID.emailAddr})`)
userID.log()