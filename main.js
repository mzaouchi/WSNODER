// console.log('Hello weldi Yesser')

// function Somme(a,b){
//     return a + b 
// }

// console.log(Somme(2,5))

// var Somme =(a,b)=> a + b

// console.log(Somme(3,9))

// console.log(process.argv)

// console.log(Somme(Number(process.argv[2]), Number(process.argv[3])))

// console.log(Somme(+process.argv[2], +process.argv[3]))

// const djeja = require('./ModuleLocal')
// const Sous = require('./ModuleLocal')

const obj = require('./ModuleLocal')

console.log(obj.Multi(+process.argv[2],+process.argv[3]))
console.log(obj.Sous(+process.argv[2],+process.argv[3]))