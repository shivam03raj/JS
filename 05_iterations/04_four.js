const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key); // This will only return the keys and not the values
    // console.log(myObject[key]);
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    // console.log(key); // This will give the index as output
    // console.log(programming[key]); // This will give the values in the array
    // console.log(`The position of ${programming[key]} is ${key}`);
}

const map = new Map() 
map.set('IN',"India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); // Maps are not iterable
}

// Objects ---> For in loop