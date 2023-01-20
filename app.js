const http = require('http')
const fs = require('fs')

http.createServer((req, res)=> {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    // instead of sending the whole file, we can send it in chunks to be faster
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', ()=> {
        fileStream.pipe(res)
    })
    // pipe is pusing from the readStream to the writeStream
    fileStream.on('error', (e)=> {
        res.end(e)
    })
})
.listen(5000)