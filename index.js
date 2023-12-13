const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('res twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>Hello this is login page.</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Code with me.</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})