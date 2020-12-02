function somaNormal(a, b, c) {
  return a + b + c
}

function somaFuncional(a) {
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}

console.log(somaNormal(1, 2, 3))
console.log(somaFuncional(1)(2)(3))