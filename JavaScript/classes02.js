class ClassTestB {
  constructor(strField1, nField2, bField3) {
    this.strField1 = strField1
    this.nField2 = nField2
    this.bField3 = bField3
    this.aField4 = []
  }

  get Stringing() {
    return this.strField1 + ";" + this.nField2 + ";" + this.bField3 + ";" + this.aField4 + "."
  }

  get LengthOfField4() {
    return this.aField4.length
  }

  setFields(strField1, nField2, bField3) {
    this.strField1 = strField1
    this.nField2 = nField2
    this.bField3 = bField3
  }

  pushField4(fField4) {
    this.aField4.push(fField4)
  }
}

let fieldClassTestB = new ClassTestB("String field 1", 0, true)
console.log(fieldClassTestB.Stringing)
console.log(fieldClassTestB.LengthOfField4)
fieldClassTestB.setFields("String field 1a", 1, false)
console.log(fieldClassTestB.Stringing)
console.log(fieldClassTestB.LengthOfField4)
fieldClassTestB.pushField4("field1 on Field4")
console.log(fieldClassTestB.Stringing)
console.log(fieldClassTestB.LengthOfField4)
fieldClassTestB.setFields("String field 1b", 2, true)
console.log(fieldClassTestB.Stringing)
console.log(fieldClassTestB.LengthOfField4)
fieldClassTestB.pushField4("field2 on Field4")
console.log(fieldClassTestB.Stringing)
console.log(fieldClassTestB.LengthOfField4)
