const myNums=[1,2,3]

const myTotal = myNums.reduce(function (acc,currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
}, 0)

// console.log(myTotal)  

/****** USING ARROW FUNCTION ******* */
const myTotal1 = myNums.reduce( (acc,curr) => acc+curr, 0)

// console.log(myTotal1)

const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "py course",
        price:999
    },
    {
        itemName: "java course",
        price:9899
    },
    {
        itemName: "c++ course",
        price:5999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0)

console.log(priceToPay)
 
