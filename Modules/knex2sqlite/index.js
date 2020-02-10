
const express = require('express')
const movies  = require('./db.js')

const app  = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Simple REST API server!')
})
app.get('/about', (req, res) => {
  res.send('about this: Simple REST API server with Knex and SQLite!!!')
})


app.get('/api/v1/movies', (req, res) => {
  movies.list()
    .then(data => res.json(data))
})


app.listen(port, () => {
  console.log(`Express started on http://${port}\npress Ctrl+C to terminate...`)
})
