const { resolve } = require("path")

const primeiroElemento = (arrayOuString => {
  console.log(`arrayOuString = ${arrayOuString}`)
  return arrayOuString[0]
})
const letraMinuscula = (letra => {
  console.log(`letra = ${letra}`)
  return letra.toLowerCase()
})

new Promise(resolve => {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log)
