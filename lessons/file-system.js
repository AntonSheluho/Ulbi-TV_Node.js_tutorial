const path = require('path')
const fs = require('fs')

// fs.mkdir(path.resolve(__dirname, 'testFolder'), (er) => {
//     try {
//         // throw new Error
//     } catch {
//         console.log('error: ')
//     } finally {
//         console.log('not error')
//         console.log('er: ', er)
//     }
//     // if (er) console.log('error: ', er);
//     // console.log('not error')
// })

// fs.rmdir(path.resolve(__dirname, 'testFolder'), (er) => {
//     if (er) console.log(er);
//     console.log('delete folder')
// })
const user = `{
    "id": "1",
    "name": "Anton",
    "hello": "world"
}`

fs.writeFile(path.resolve(__dirname, 'user.json'), user, (er) => {
    if (er) console.log(er);
    console.log('error writeFile')
})