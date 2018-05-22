class ClassTestA {
  constructor() {
    this.strField1 = "empty"
    this.nField2 = 0
    this.bField3 = true
    this.aField4 = []
  }

  get Stringing() {
    return this.strField1 + ";" + this.nField2 + ";" + this.bField3 + ";" + this.aField4 + "."
  }

  get LengthOfField4() {
    return this.aField4.length
  }

  setFields(strField1, nField2, bField3, fField4) {
    this.strField1 = strField1
    this.nField2 = nField2
    this.bField3 = bField3
    this.aField4.push(fField4)
  }
}

let fieldClassTestA = new ClassTestA()
console.log(fieldClassTestA.Stringing)
console.log(fieldClassTestA.LengthOfField4)
fieldClassTestA.setFields("String field 1a", 1, false, "field1 on Field4")
console.log(fieldClassTestA.Stringing)
console.log(fieldClassTestA.LengthOfField4)
fieldClassTestA.setFields("String field 1b", 2, true, "field2 on Field4")
console.log(fieldClassTestA.Stringing)
console.log(fieldClassTestA.LengthOfField4)
