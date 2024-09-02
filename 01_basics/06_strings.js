const name = "amar"
const repoCount = 12

//console.log(name  + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('amar-baba')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('r')) 

const newString = gameName.substring(0,4)
console.log(newString)

const newString1 = gameName.slice(-5,-2)
console.log(newString1)

const newString2 = "   aman    "
console.log(newString2)
console.log(newString2.trim())

//also there are trimStart() and trimEnd 

const url = "https://medium.com/nyc-design/what-is-a-prototype-924ff9400cfd"
console.log(url.replace('m','&20'))
 //this replaces only one occurence

//for all ocurence:
const url1 = "https://medium.com/nyc-design/what-is-a-prototype-924ff9400cfd";
console.log(url1.replace(/-/g,'&20'));

console.log(url.includes('https')) //check if it is present

console.log(gameName.split('-'))