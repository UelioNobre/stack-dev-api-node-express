const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.json(
  { a: 1, b: 2, c: 3 }
))

app.post('/', (req, res) => {
  const { body } = req
  return res.json({ info: 'Body modificado', body })
})

module.exports = app;
