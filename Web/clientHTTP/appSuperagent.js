const superagent = require('superagent')

// superagent
//   .get('https://www.google.com')
//   .then(res => {
//     console.log(`Status   : ${res.status}`)
//     console.log(`headers  : ${JSON.stringify(res.headers, null, 2)}`)
//   })

superagent
  .get('https://swapi.co/api/people/1?format=json')
  .then(res => {
    console.log(`res      : ${JSON.stringify(JSON.parse(res.text.replace('\"', '"')), null, 2)}`)
  })
