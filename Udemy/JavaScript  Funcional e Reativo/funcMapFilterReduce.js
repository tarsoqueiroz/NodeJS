//
// Exemplo para fixar o MAP
//
const aNumbers = [1, 2, 3, 4, 5]
const aWords   = ['Tarso', 'Cati', 'Anna', 'Breno']
const aBuy     = [
  { product: 'Pen',      qty: 2,   price: 1.49 },
  { product: 'Pencil',   qty: 3,   price: 0.49 },
  { product: 'Book',     qty: 5,   price: 2.99 },
  { product: 'Notebook', qty: 3,   price: 0.99 },
  { product: 'Post it',  qty: 5,   price: 1.01 },
  { product: 'Bag',      qty: 1,   price: 3.49 },  
]

//
const fnMultiplyBy2 = n => n * 2
const fnToUpper = strValue => strValue.toUpperCase()
const fnUppeOfPenny = item => item.price > 1.99
//
console.log(`Array original             : ${aNumbers}`)
console.log(`Array com MAP dobrando     : ${(aNumbers.map(fnMultiplyBy2))}`)
console.log(`Array original             : ${aWords}`)
console.log(`Array com word maiuscula   : ${(aWords.map(fnToUpper))}`)
console.log('Array original             : ')
console.log(aBuy)
console.log('Array com itens maior 0.99 : ')
console.log(aBuy.filter(fnUppeOfPenny))
//

