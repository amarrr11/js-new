//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Amar",
    fullName:"Amarnath Tripathy",
    "full name":"Amarnath Tripathy",
    //mySym : "key1"

    [mySym] : "key1",
    
    age : 17,
    location:"ckp",
    email: "amar@hotmail.com",
    isLoggedIn:false,
    lastLogin:["Mon","Sat"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"]) //cannot access by dot
console.log(JsUser[mySym]) // if not [mySym] then string
console.log(typeof mySym) // if not [mySym] then string

JsUser.email = "amar@baba.com"
// Object.freeze(JsUser) //wont be able to change anything
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting())


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo())