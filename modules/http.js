const http = require('http')

const port = 8080

const server = http.createServer((req,res) => {
  if(req.url === '/'){
    res.writeHead(200, {
      "Content-type": "text/html"
    })
    res.end(
      "<h1>home</h1>"
    )
  }
  
  if(req.url === '/users'){
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
    res.writeHead(200, {
      "Content-type": "application/json"
    })
    res.end(JSON.stringify(users))
  }
})

server.listen(port, () => console.log(`listenen at http://localhost:${port}`))