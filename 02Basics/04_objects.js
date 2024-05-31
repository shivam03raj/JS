// const tinderUser = new Object()----> This is a singleton object
const tinderUser = {}  // This is a non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Shivam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shivam",
            lastname: "Raj"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj = {
    name: "Raj",
    roll: 78
}


// const obj3 = { obj1, obj2}
// const obj3 = Object.assign(obj1, obj, obj2)

const obj3 = {...obj, ...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },{
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email  // Any value from Database comes as an array of object

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // The datatype of the output value is array.
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // The datatype of the output value is an array. And each of its element is also an array.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));