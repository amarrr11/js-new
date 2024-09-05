const dc = ["Superman","Batman","flash"]
const marvel=["Spiderman","ironman","antman"]

// marvel.push(dc) ///it will add as an element 

// console.log(marvel)
// console.log(marvel[3][1])

const allheros = marvel.concat(dc)
console.log(allheros)

const all_new_heros = [...marvel,...dc] //this is used if more than 2 arrays need to concatenate
console.log(all_new_heros)

const another_array = [1,2,4,[4,5,6],[12,13,[10,14]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("amarbaba")) //false
console.log(Array.from("Amar"))  //[ 'A', 'm', 'a', 'r' ]
console.log(Array.from(1213323))  //empty
console.log(Array.from({name: "amar"})) //inteterting


//TO MAKE ARAY

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))