// Immediately Invoked Function Expressions (IIFE)------> An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed immediately after it is defined. This pattern is often used to create a new scope, avoiding the pollution of the global scope and providing a mechanism for creating private variables and functions.


(function chai(){
    console.log(`DB CONNECTED`);
})();

// ("Function definition")("For execution")-----> Syntax of IIFE: ()()

( () => {
    console.log(`DB CONNECTED TWO`);
} )();

( function code() {
    //Named IIFE
    console.log(`DB CONNECTED`);
} )();

// NOTE: IIFE once invoked doesnot know where to end the expression, so it is a must to put semicolon after each execution to efficienly run the code.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Shivam')  ; 