const user = {
    username:"amar",
    price:399,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this) //what if //currren context
    }
}
// user.welcomeMessage() 
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) //currect context this wont run 

//in browser the golbal variable is window object so it works diff in browser console


function chai(){
    let username="amar"
    console.log(this)
    console.log(this.username) //undefined
    //can be used in objects and not in fucntions
}
// chai() //function call

const chai1 = function() {
    let username = "amar"
    console.log(this.username);//same as above
}

const chai3 = () => {
    let username = "amarbaba"
    console.log(this.username); //undefined hi dega
    console.log(this); //{}
}

/******************************************** */

// const addTwo = (num1,num2) => {
//     return num1+num2;
// } 

//curly braces rhege to return keyword likhna pdega

// const addTwo = (num1,num2) => num1+num2
// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(3,4))

// using in Object
const addTwo = (num1 ,num2) => ({username: "amar"})

console.log((addTwo)()) //()()


