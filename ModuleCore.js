const fs = require('fs')


console.log('Start')

// fs.readFile('./Test.txt',(err,data)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })

console.log(fs.readFileSync('./Test.txt','utf-8'))

console.log('End')