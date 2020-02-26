const fetch = require('node-fetch')

// fetch('https://www.google.com')
//   .then(res => {
//     if (res.ok) {
//       console.log(res)
//       return res
//     }
//     throw new Error(res)
//     // console.log(`Status   : ${res.status}`)
//     // console.log(`headers  : ${JSON.stringify(res.headers, null, 2)}`)
//   })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(console.error)

fetch('https://swapi.co/api/people/1?format=json')
  .then(res => {
    if (res.ok) {
      console.log(res)
      return res.json()
    }
    throw new Error(res)
    // console.log(`Status   : ${res.status}`)
    // console.log(`headers  : ${JSON.stringify(res.headers, null, 2)}`)
  })
  .then(res => {
    console.log(res)
  })
  .catch(console.error)

// axios
//   .get('https://swapi.co/api/people/1?format=json')
//   .then(res => {
//     console.log(`res   : ${res}`)
//     console.log(res.data)
//     // console.log(`response : ${JSON.stringify(res.text, null, 2)}`)
//     //console.log(`res      : ${JSON.stringify(JSON.parse(res.text.replace('\"', '"')), null, 2)}`)
//   })
