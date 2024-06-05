// let a = 10
// const b = 20
// var c = 30

{} //-----> This is called scope of the program. With a function or any if-else command this is called the scope whereas in object, this is used for object declaration.

// var c = 300 

if(true){   // This is block scope
    let a = 10
    const b = 20
    var c = 30
}

let a = 300

if(true){   // NOTE: Scope in console and scope in node is different 
    let a = 10
    const b = 20
    // console.log("INNER: ",a );
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "raj"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "Raj"
    if (username === "Raj"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ------------------------------Interesting--------------------------
// These are two methods to make functions

console.log(addone(5))
function addone(num){
    return num + 1
}


addTwo(5) // This method of making functions will give error if we place the before the function declaration due to hoisting error, becuse we have held the function in a variable

const addTwo = function(num){
    return num + 2
}


