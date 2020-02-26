const got = require('got')


try {
  const res =  await got('https://www.google.com')

  console.log(res.body)
//  console.log(`Status   : ${res.status}`)
} catch (err) {
  console.log(err.response.body)
}

// axios
//   .get('https://swapi.co/api/people/1?format=json')
//   .then(res => {
//     console.log(`res   : ${res}`)
//     console.log(res.data)
//     // console.log(`response : ${JSON.stringify(res.text, null, 2)}`)
//     //console.log(`res      : ${JSON.stringify(JSON.parse(res.text.replace('\"', '"')), null, 2)}`)
//   })
