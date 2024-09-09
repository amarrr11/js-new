const myArr= new Array(1,2,3,4)
console.log(myArr[1]) //2

const myArr2 = [11,22,33,44]
console.log(myArr2[2]) 


//Array methods

myArr.push(5)
console.log(myArr)
myArr.pop()

myArr.unshift(0) //add 0 in beginning
myArr.shift() //remove first element  

console.log(myArr.includes(7))
console.log(myArr.indexOf(3))

const newArr=myArr.join()

console.log(myArr)
console.log(newArr)
console.log(typeof newArr) //string comma separeted

//slice : gives a slice
//splice :includes the last index  and also will remove from the parent array

console.log("A ",myArr)

const myn1=myArr.slice(1,3);

console.log(myn1);
console.log("B ",myn1);

const myn2=myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)