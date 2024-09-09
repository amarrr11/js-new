function addTwONumbers(num1,num2){
    return num1+num2;
}

const res=addTwONumbers(2,4)
console.log("Result : "+res)

//another ex

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("amar"))
// console.log(loginUserMessage())

//what happens when u add items in shoping cart

function calculateCartPrice (...num1){
   
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000))

//function calling from OBJECTS

const user = {
    username: "amar",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({ //another way
    username:"sam",
    price:200
})


//IN ARRAY 

const mynewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(mynewArray))
console.log(returnSecondValue([200,400,700,1000]));

