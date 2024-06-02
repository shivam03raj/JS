function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}

// sayMyName-----> This is reference of function
// sayMyName() //As we set the empty parenthesis, we begin the execution of function

// function addTwoNumbers(num1, num2){ // Here, num1 and num2 are parameters whereas 3 and 8 will be called the arguments.
//     console.log( num1 + num2);
// }
// addTwoNumbers(3, 8)

// function addTwoNumbers(num1, num2){ 
    
//     let result = num1 + num2
// }

// console.log("Result: ", result); // The output of this console is undefined

// function addTwoNumbers(num1, num2){ 
    
//     let result = num1 + num2
//     return result
//     console.log("Shivam") // No code will ever be executed after the return command has been given. This is an in built property of function.
// }
// const result = addTwoNumbers(3, 8)

// function addTwoNumbers(num1, num2){ 

//     return num1 + num2;
// }

// console.log("Result: ", result);

// function userLogIn(username = "sam"){ This line means that the function cannot have undefined value, if we don't give any value during execution then it will automatically take "sam" as input unless we override it during execution.
// function userLogIn(username){
//     // if(!username){ This willl give the same output as below code
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`;
// }

// console.log(userLogIn("Shivam"));
// console.log(userLogIn()); // This will return undefined when no value is given and no initial condition is given as well.
// console.log(userLogIn()); 



// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(200))

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 600, 2000))

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 600, 2000))

const user = {
    username: "Shivam",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 500, 900]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 900]));