// Singleton
// Object.create

// Object literals----> In this singleton is not created

const mySym = Symbol("key1")

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
// console.log(JsUser["email"]) 
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "raj.grd@gmail.com"
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