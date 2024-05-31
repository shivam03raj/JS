// Singleton
// Object.create

// Object literals----> In this singleton is not created

const mySym = Symbol("key1")

const User = {} // This is an object. Now, we can add multiple keys and values as required. Keys can be written simply like 'name' or we can also write it as strings "name".

// Behind the scenes, the keys are taken as strings.

const JsUser= {
    name: "Shivam", // Keys and values
    "full name": "Shivam Raj",
    [mySym]: "mykey1", // To use symbol as key then, the syntax is [symbol]
    age: 20,
    location: "Mumbai",
    email: "044shiv.am@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //One way of accessing the values
// console.log(JsUser[email]) // In this console, we will get error because behind the scene the keys are being tracked as strings. The below console for email is correct
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // If we mentioned keys as strings, i.e. within double quotes then these cannot be accessed until we console it in the given manner.
// console.log(JsUser[mySym])

JsUser.email = "raj.grd@gmail.com" // To change any values
// Object.freeze(JsUser) //After this point, the value of JsUser cannot be changed.

JsUser.email = "raj@gmail.com"

// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())