// Ensaio para mostrar a questão da imutabilidade
// e efeitos colaterais em funções
//
const aNumsA = [9, 8, 3, 7, 4, 2, 5, 1, 6, 0]
const aNumsB = [9, 8, 3, 7, 4, 2, 5, 1, 6, 0]
const aNumsC = Object.freeze([9, 8, 3, 7, 4, 2, 5, 1, 6, 0])

function fnOrderImpure(array) {
  return array.sort()
}
function fnOrderPure(array) {
  return [...array].sort()
}

console.log(`\nOriginals arrays\naNumsA = ${aNumsA}\naNumsB = ${aNumsB}\naNumsC = ${aNumsC}\n`)

_ = fnOrderImpure(aNumsA)
const aNumsTemp = fnOrderPure(aNumsB)
console.log(`After calling impure and pure sort functions\naNumsA = ${aNumsA}\naNumsB = ${aNumsB}\naNumsC = ${aNumsC}\naNumsTemp = ${aNumsTemp}\n`)

aNumsA[4] = 400
aNumsB[4] = 400
aNumsC[4] = 400
console.log(`After changing specific value\naNumsA = ${aNumsA}\naNumsB = ${aNumsB}\naNumsC = ${aNumsC}\n`)
