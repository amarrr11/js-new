let score="33abc"

console.log(typeof score)

let valueInNumber=Number(score) //it will convert anything to number
console.log(typeof valueInNumber)
console.log(valueInNumber) //NaN


let score2=null

console.log(typeof score2) //object

let valueInNumber2=Number(score2) //it will convert anything to number
console.log(typeof valueInNumber2)
console.log(valueInNumber2) //0


let score3=undefined

console.log(typeof score2) //object

let valueInNumber3=Number(score3) //it will convert anything to number
console.log(typeof valueInNumber3)
console.log(valueInNumber3) //NaN

let isloggedIn = 23

let booleanIsLoggedIn=Boolean(isloggedIn)
console.log(booleanIsLoggedIn)

// 1 => true, 0=>false
// "" => false
// "amar" => true

let someNumber=3 

let stringNumber=String(someNumber) 
console.log(stringNumber) //3
console.log(typeof stringNumber) //string

/************OPERATIONS************ */

let str1="hello"
let str2=" amar"

let str3=str1+str2
console.log(str3)


// ***************************************


console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2)  //122
console.log(1 + 2 + "2")  //32

let v=(1 + 2 + "2")

console.log(typeof v) //string

console.log(true) //true
console.log(+true) //1
console.log(+"") //0
