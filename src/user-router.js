const Router = require('../framework/Router')
const router = new Router()

const users = [
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Gena'},
    {id: 3, name: 'Kiryl'},
    {id: 4, name: 'Sergey'},
]

router.get('/users', (req, res) => {
    if(req.params.id) {
        return res.send(users.find(user => user.id == req.params.id))
    }
    res.send(users)
})
router.post('/users', (req, res) => {
    console.log(req.body)
    const user = req.body
    users.push(user)
    res.send(users)
})

module.exports = router