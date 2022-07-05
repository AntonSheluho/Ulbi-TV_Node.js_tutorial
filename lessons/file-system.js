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
};`;
const user2 = `{
    "id": "2",
    "name": "Darya",
    "hello": "world"
};`;

// fs.writeFile(path.resolve(__dirname, 'user.json'),`${user}`, (er) => {
//     if (er) console.log('error: ', er);
//     console.log('create writeFile')
//     fs.appendFile(path.resolve(__dirname, 'user.json'), `${user2}`,  (er) => {if (er) {console.log('error: ', er)}; console.log('append writeFile')})
// })

const writeFileFS = async (path, date) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, date, (err) => {
            if(err) {
                return reject(er.message)
            }
            resolve()
        })
    })
}

const appendFileFS = async (path, date) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, date, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    })
}

writeFileFS(path.resolve(__dirname, 'users.txt'), user)
    .then(() => appendFileFS(path.resolve(__dirname, 'users.txt'), user2))
    .catch(err => console.log(err))