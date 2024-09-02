const score = 123
// console.log(score)
// console.log(typeof score) //number 


const balance = new Number(1212) //speacify it will be number only
// console.log(balance)
// console.log(typeof balance) //object always

// console.log(balance.toString().length) //4
// console.log(balance.toFixed(1)) //1212.0

const otherNumber = 123.8977

// console.log(otherNumber.toPrecision(3)) //124
// console.log(otherNumber.toPrecision(4)) //123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))

//+++++++++++++++++++MATHS++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))

console.log(Math.random())
console.log((Math.random()*10)+1) //to avoid 0-1 values
console.log(Math.floor(Math.random()*10)+1) //to avoid 0-1 values

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
