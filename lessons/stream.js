const path = require('path');
const fs = require('fs');
//  fs.readFile(path.resolve(__dirname, 'users.txt'), (err, data) => {
//     if (err) {
//         console.log(err.message)
//     }
//     console.log(data)
//  })

// const stream = fs.createReadStream(path.resolve(__dirname, 'user.txt'))

// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
// stream.on('error', (err) => {
//     console.log('err name: ' ,err.name)
//     console.log('err message: ', err.message)
// })
// stream.on('open', (fd) => {
//     console.log('open stream with fd: ', fd)
// })
// stream.on('end', () => {
//     console.log('stream was ended')
// })

// const writebleStream = fs.createWriteStream(path.resolve(__dirname, 'writeble.txt'))
// for (let i = 0; i < 20; i++) {
//     writebleStream.write(i + '\n');
// }
// writebleStream.end()
// writebleStream.close()
// writebleStream.destroy()
// writebleStream.on()


// const http = require('http');

// http.createServer((req, res) => {
//     //req => readeble stream
//     //res => writeble stream

//     const stream = fs.createReadStream(path.resolve(__dirname, 'users.txt'))

//     // Stream ended read file earlier then user have downloaded
//     stream.pipe(res) // <=> pipe method help synchronize read and write stream
// })