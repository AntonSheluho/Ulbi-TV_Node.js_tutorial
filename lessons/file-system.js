const path = require('path')
const fs = require('fs')

fs.mkdir(path.resolve(__dirname, 'testFolder'), (er) => {
    try {
        // throw new Error
    } catch {
        console.log('error: ')
    } finally {
        console.log('not error')
        console.log('er: ', er)
    }
    // if (er) console.log('error: ', er);
    // console.log('not error')
})