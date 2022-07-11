const Application = require('./framework/Application')
const usersRouter = require('./src/user-router')
const PORT = process.env.PORT || 5000
const jsonParser = require('./framework/parseJson')

// const http = require('http');
// const EventEmitter = require('events')
// const Router = require('./framework/Router')
// const emitter = new EventEmitter()


const app = new Application()
// const router = new Router()

// router.get('/users', (req, res) => {
//     res.end('Hello User From Node.js')
// })

// router.get('/posts', (req, res) => {
//     res.end('Hello Posts From Node.js')
// })

app.addRouter(usersRouter)

app.listen(PORT, () => {console.log(`server have started on ${PORT} PORT`)})

// const server = http.createServer()

// const server = http.createServer((req, res) => {
    // res.writeHead(200, {
        // 'Content-type': 'text/html' // or
    //     'Content-type': 'application/json'
    // })
    // if (req.url === '/users') {return res.end(JSON.stringify([{id: 1, name: 'Anton'}]))}
    // if (req.url === '/posts') {return res.end(`<h2>Posts</h2>`)}
    // res.writeHead(200, {
    //     'Content-type': 'text/html; charset=utf-8'
    // })
    // res.end("<h1>It's my localhost 5000 1) Привет</h1>")
// })

// server.listen(PORT, () => {console.log(`server have started on ${PORT} PORT`)})