// const fs = require('fs')


// console.log('Start')

// fs.readFile('./Test.txt',(err,data)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })

// console.log(fs.readFileSync('./Test.txt','utf-8'))

// console.log('End')


const hadir = require('http')

hadir.createServer((req,res)=>{
    res.write('<h1>Rahma</h1>')
    res.end()
}).listen(3000, console.log("Server is running"))