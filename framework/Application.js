const http = require('http')
const EventEmitter = require('events')

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter
        this.server = this._createServer()
        this.middlewares = []
    }

    // endpoint = {
    //     '/users': {
    //         'GET': handler
    //     }
    // }

    use(middleware) {
        this.middlewares.push(middleware)
    }

    listen(port, callback) {
        return this.server.listen(port, callback)
    }

    addRouter(router) {
        Object.keys(router.endpoint).forEach(path => {
            const endpoint = router.endpoint[path];
            Object.keys(endpoint).forEach((method) => {
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                    const handler = endpoint[method];
                    this.middlewares.forEach(middlewares => middlewares(req, res));
                    handler(req, res)
                })
            })
        })
    }

    _createServer() {
        return http.createServer((req, res) => {
            let body = ''
            req.on('data', (chunk) => {
                body += chunk
            })
            req.on('end', (user) => {
                if(body) {
                    req.body = JSON.parse(body)
                }
                const emitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res)
                if (!emitted) {res.end()}
            })
        })
    }

    _getRouteMask(path, method) {
        return `[${path}]: [${method}]`
    }
}