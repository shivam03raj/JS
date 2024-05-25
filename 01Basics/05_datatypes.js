// Primitive

// 7 types: String, Number, Boolean, null, Undefined, Symbol, BigInt     --------> These are all based on call by value

// const a = 100
// const b = 100.3

// const log = false
// const temp = null
// let mail

// const Id = Symbol('123')
// const newId = Symbol('123')

// console.log(Id === newId);

// const bigNum = 44446468517971335467913n // BigInt  [The n at the end of the number is used to denote that the number is a BigInt]

// Reference (Non-Primitive)

// Array, Objects, Functions

// const heroes =["happy", "smiley", "blakey"];

// let obj = {
//     name: "shivam",
//     age: 20,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof bigNum)
// console.log(typeof temp)
// console.log(typeof myFunction)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory: Stack (Primitive) and Heap (Non-Primitive)

let num = "shivam"

let newName = num
newName = "raj"

console.log(num)
console.log(newName)

let user = {
    mail: "user@google.com",
    upi: "user@ybl"
}

let userTwo = user

userTwo.mail = "raj@google.com"

console.log(user.mail)
console.log(userTwo.mail)
