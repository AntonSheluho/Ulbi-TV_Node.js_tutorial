const http = require('http');
const EventEmitter = require('events')

const PORT = process.env.PORT || 5000
const emitter = new EventEmitter()

class Router {
    constructor() {
        this.endpoint = {}
    }

    request(method = "GET", path, handler) {
        if(!this.endpoint[path]) {
            this.endpoint[path] = {}
        }
        // /users [GET, POST, PUT] /posts [GET, POST, PUT, DELETE]

        const endpoint = this.endpoint[path]

        if(this.endpoint[method]) {
            throw new Error(`[${method}] on link ${path} does not exist`)
        }

        endpoint[method] = handler
        emitter.on(`[${path}]: [${method}]`, (req, res) => {
            handler(req, res)
        })
    }

    get(path, handler) {
        this.request('GET', path, handler)
    }
    post(path, handler) {
        this.request('POST', path, handler)
    }
    put(path, handler) {
        this.request('PUT', path, handler)
    }
    delete(path, handler) {
        this.request('DELETE', path, handler)
    }
}

const router = new Router()

router.get('/users', (req, res) => {
    res.end('Hello User From Node.js')
})

router.get('/posts', (req, res) => {
    res.end('Hello Posts From Node.js')
})

const server = http.createServer((req, res) => {
    const emitted = emitter.emit(`[${req.url}]: [${req.method}]`, req, res)
    if (!emitted) {res.end()}
})


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

server.listen(PORT, () => {console.log(`server have started on ${PORT} PORT`)})