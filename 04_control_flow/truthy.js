// let userEmail = "raj@gmail.com"
// let userEmail = []
let userEmail = ""

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array  is empty");
// }

const emotyObj = {}

if (Object.keys(emotyObj).length === 0) {
    // console.log("Object is empty");
}

// console.log( false == 0 );
// console.log( false == '' );
// console.log( 0 == '' );

// Nullish Coalescing Operator (??):  null undefined-----> The Nullish Coalescing Operator (??) is a logical operator in JavaScript that provides a way to handle null or undefined values. It allows you to provide a default value if the left-hand operand is null or undefined, but not if it is any other falsy value such as 0, NaN, or an empty string.

let val1;
val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");