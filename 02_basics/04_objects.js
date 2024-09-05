//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id="123ado"
tinderUser.name = "amar"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser= {
    email : "some@gmail.com",
    fullName : {
        userFullName:{
            firstName:"amar",
            lastName: "tripathy"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1,obj2} //it will create object in object
// const obj3 = Object.assign({} ,obj1, obj2 ,obj4)
const obj3 = {...obj1, ...obj2}

console.log(obj3)

//************************************* */

const users = [
    {
        id: 1,
        email: "amar@gmail.com"
    },
    {
        id: 2,
        email: "@gmababail.com"
    },
    {
        id: 1,
        email: "amar@gmail.com"
    }

]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(Object.hasOwnProperty('isLoggedIn'))

