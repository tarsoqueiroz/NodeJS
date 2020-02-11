
const express    = require('express')
const bodyParser = require('body-parser')
const movies     = require('./movies')

const app  = express()
const port = process.env.PORT || 3333

app.use(bodyParser.urlencoded({ extended: false }))

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
app.post('/api/v1/movies', (req, res) => {
  const { title, released } = req.body
  movies.create(title, released)
    .then(data => res.json(data))
})
app.put('/api/v1/movies', (req, res) => {
  movies.update(req.body)
    .then(() => movies.list())
    .then(data => res.json(data))
})
app.delete('/api/v1/movies', (req, res) => {
  movies.del(req.body.id)
    .then(() => movies.list())
    .then(data => res.json(data))
})

app.listen(port, () => {
  console.log(`Express started on http://${port}\npress Ctrl+C to terminate...`)
})
