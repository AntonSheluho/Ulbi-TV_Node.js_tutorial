const path = require('path')
const fs = require('fs')

const text = 'text fs append write path'


writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then((data) => data.split(' ').length)
    .then(data => writeFileAsync(path.resolve(__dirname, 'count.txt'), `number of words: ${data}`))
    .then(() => {removeFileAsync(path.resolve(__dirname, 'text.txt'))})
    .catch(err => console.log(err))

async function writeFileAsync(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            console.log('writeFile')
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    })
}

async function appendFileAsync(path, data) {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, data, (err) => {
            console.log('appendFile')
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    })
}
async function readFileAsync(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
            console.log('readFile')
            if (err) {
                return reject(err.message)
            }
            resolve(data)
        })
    })
}

async function removeFileAsync(path) {
    return new Promise((resolve, reject) => {
        fs.rm(path, (err) => {
            console.log('rm')
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    })
}