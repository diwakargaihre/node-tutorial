const http = require('http')

const server = http.createServer((req,res) => {
    res.write('Welcome to Home Page')
    res.end()
})

server.listen(7000)