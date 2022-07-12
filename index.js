const Application = require('./framework/Application')
const usersRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const parseUrl = require('./framework/parseUrl')
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000

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
app.use(jsonParser)
app.use(parseUrl('http://localhost:5000'))

app.addRouter(usersRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://Admin:rJYSt7S8Ns4eFeKH@cluster0.m8bcu.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => {console.log(`server have started on ${PORT} PORT`)})
    } catch(err) {
        console.log(err)
    }
}
console.log('1')
start()

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