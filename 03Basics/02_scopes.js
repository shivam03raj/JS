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
    console.log("INNER: ",a );
}

// console.log(a);
// console.log(b);
// console.log(c);

