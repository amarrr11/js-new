//primitive
//7 types : string,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

const bigNumber = 23131433413441868661n 


//reference(Non primitive) 

//Array,Objects,Functions

const heros = ["shkti","naagraj","doga"]

let myObj = {
    name: "amar",
    age: 22,
}

const myFunction = function() {
    console.log("hello world");
}

console.log(typeof heros) //object
console.log(typeof myFunction) //function (called as function object)
console.log(typeof myObj) //object

//+++++++++++++++++++++++++++++++++++++++++++++++++

//stack (primitive) / heap (non-primitive direct address)

let name1="amarnath"
let name2=name1
name2="tripathy"

console.log(name1)
console.log(name2) //will change differently cause it makes a copy in stack

let userOne = {
    email: "user@gmail.com",
    upi: "@paypal",
}

let userTwo = userOne
userTwo.email = "amar@gmail.com" //direct change in address

console.log(userOne.email) 
console.log(userTwo.email)

