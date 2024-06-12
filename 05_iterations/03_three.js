// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map() // A map does not take the same value twice
map.set('IN',"India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key); // const key of map--> This will give the key and value pair as an array
    // console.log(key, ":-", value); // const [key, value] of map--> This will seperate the key and value pairs
}

const myObject = {
    Game1: "NFS",
    Game2: "Spiderman"
}

for (const [key, value] of myObject) { // Objects cannot be iterated using forof loop.
    console.log(key, ":-", value);
}

