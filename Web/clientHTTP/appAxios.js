const axios = require('axios')

// axios.get('https://www.google.com')
//   .then(res => {
//     console.log(`Status   : ${res.status}`)
//     console.log(`headers  : ${JSON.stringify(res.headers, null, 2)}`)
//   })

axios
  .get('https://swapi.co/api/people/1?format=json')
  .then(res => {
    console.log(`res   : ${res}`)
    console.log(res.data)
    // console.log(`response : ${JSON.stringify(res.text, null, 2)}`)
    //console.log(`res      : ${JSON.stringify(JSON.parse(res.text.replace('\"', '"')), null, 2)}`)
  })
