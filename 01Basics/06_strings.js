// Strings can be denoted using single quotes as well as double quotes.

const Name = "Shivam"
const repo = 50

console.log(Name + repo + "Hello");

// Now a days, we use backticks because of String interpolation

console.log(`Hello, my Name is ${Name} and my repo count is ${repo}`);

// Another method to declare strings, using the object 'new'.

const newName = new String('JoyBoy');

// console.log(newName[2])
// console.log(newName.__proto__)

// console.log(newName.length)
// console.log(newName.toUpperCase());
// console.log(newName.charAt(3));
// console.log(newName.indexOf('B'));  For finding the index of a character, the character is denoted inside single quotes.

const newString = newName.substring(0, 3); // The last index of the given range is not included in the new string formed. Negative values has no meaning in substring range.

console.log(newString)

const newStr1 = newName.slice(-5,4) // Negative values can be given in slice range
console.log(newStr1)

const newStr2 = "     Simran     "
console.log(newStr2)
console.log(newStr2.trim())

const url = "https://www.google.com%20media"
console.log(url.replace('%20', '-'))
console.log(url.includes('google')) // Includes searches a specific keyword in the string

const arr = "The name is Shivam";
console.log(arr.split(' '));
