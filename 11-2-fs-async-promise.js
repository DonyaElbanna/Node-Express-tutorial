// instead of nesting multible cb functions inside in (11-fs-async)

const {readFile, writeFile} = require('fs').promises

// // instead of writing these 3 ines we can .proise on require('fs')
// const util = require('util')

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


// creating async funtcion >>>>> instead of creating it, we'll use the util module
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-async-promisify', `The result is: ${first} ${second}`, {flag: 'a'})
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}
start()