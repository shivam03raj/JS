const user = {
    username: "Shivam",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this) -----> In JavaScript, this is a keyword that refers to the context in which the current code is executing.
    }

}

// console.log(this); // In a browser, this will log the window object


// user.welcomeMessage // This will give no output and we need to put () at the end to be able to print the output

// user.welcomeMessage()
// user.username = "Raj"
// user.welcomeMessage()

// console.log(this) // This returns an empty object {} because there is no data in the global space at the moment, this is for node but in browser, we will receive window as log.

// function chai (){
//     let username = "Raj"
//     console.log(this.username); // This method is not for fuctions, it can be used only for objects.
// }

// chai()


// const chai = function(){
//     let username = "Raj"
//     console.log(this.username);  ----> Same as previous chai function we get undefined as result
// }

// chai()


const chai = () => {  //This is the arrow function
    let username = "Raj"
    console.log(this.username);
}  

// chai()


() => {}   //This is the basic syntax of arrow function

// const addTwo = (num1, num2) => { // This is a basic arrow function
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2  -----> THis is called Implicit return

// const addTwo = (num1, num2) => (num1 + num2)  

// NOTE: If we wrap any function in curly braces{}, then it must have return keyword, but if we use parenthesis() then return keyword is not used

const addTwo = (num1, num2) => ({username: "Shivam"})

console.log(addTwo(6, 7));

