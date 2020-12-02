
setTimeout(function() {
  console.log('Executando callback aninhado 01')
  setTimeout(function() {
    console.log('Executando callback aninhado 02')
    setTimeout(function() {
      console.log('Executando callback aninhado 03')
    }, 2000)
  }, 2000)
}, 2000)

const esperarPor = (timeToWait = 2000, whoAmI = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Executando promise ${whoAmI}`)

      if (timeToWait === 2001) {
        reject('forced end')
        return
      }
      resolve()
    }, timeToWait)
  })
}

esperarPor()
  .then(esperarPor(timeToWait = 2000, whoAmI = 1))
  .then(esperarPor())
  .then(esperarPor(timeToWait = 2000, whoAmI = 3))
  .then(esperarPor(timeToWait = 2001, whoAmI = 4))
  .then(esperarPor(timeToWait = 2000, whoAmI = 5))
  .catch(console.log)
