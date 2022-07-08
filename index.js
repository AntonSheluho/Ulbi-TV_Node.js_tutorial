const http = require('http');

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    res.end('hellosdfsdfsdfadcac')
})

server.listen(PORT, () => {console.log(`server have started on ${PORT} PORT`)})