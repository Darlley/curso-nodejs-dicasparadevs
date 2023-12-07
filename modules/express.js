const express = require('express')

const app = express()


app.get('/', (req,res) => {
  res.contentType('text/html')
  res.status(200).end('<h1>home</h1>')
})

app.get('/users', (req,res) => {
  const users = [
    {
      name: "Fulano"
    },
    {
      name: "Ciclano"
    },
    {
      name: "Beltrano"
    },
  ]

  res.status(200).json(users)
})

app.listen(8080, () => console.log())