const Name = "Shivam"
const repo = 50

console.log(Name + repo + "Hello");

console.log(`Hello, my Name is ${Name} and my repo count is ${repo}`);

const newName = new String('JoyBoy');

// console.log(newName[2])
// console.log(newName.__proto__)

// console.log(newName.length)
// console.log(newName.toUpperCase());
// console.log(newName.charAt(3));
// console.log(newName.indexOf('B'));

const newString = newName.substring(0, 3);
console.log(newString)

const newStr1 = newName.slice(-5,4)
console.log(newStr1)

const newStr2 = "     Simran     "
console.log(newStr2)
console.log(newStr2.trim())

const url = "https://www.google.com%20media"
console.log(url.replace('%20', '-'))
console.log(url.includes('google'))

const arr = "The name is Shivam";
console.log(arr.split(' '));
