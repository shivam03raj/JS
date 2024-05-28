// array

const myArr = [0, 1, 2, 3, 4, 5, 6] // Elements can be of different datatypes as well.
const myLet = ["aman", "raj", "ravi"]

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr2[1]);

// Array Methods

myArr.push(6) // Add an element in the array
myArr.pop() // Removes the last value of the array
console.log(myArr);

myArr.unshift(9) // Adds an element at the beginning of the array
myArr.shift() // Removes the first element of the array

console.log(myArr.includes(9)); // It questions the array whether a given value is present in the array or not
console.log(myArr.indexOf(9)); // It questions the array about the index of an element and returns a negative value if the element is not in the array

const newArr = myArr.join() // Adds all the elements of an array into string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// Slice & Splice

console.log("A ", myArr); 

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) 
console.log("C ", myArr);
console.log(myn2);

// Slice----> The slice method is used to create a shallow copy of a portion of an array into a new array. It does not modify the original array. The method takes two arguments: the start index (inclusive) and the end index (exclusive). If no end index is provided, slice extracts to the end of the array.

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

let slicedFruits1 = fruits.slice(1, 3); // ["Banana", "Cherry"]
let slicedFruits2 = fruits.slice(2);    // ["Cherry", "Date", "Elderberry"]
let slicedFruits3 = fruits.slice(-2);   // ["Date", "Elderberry"]
let slicedFruits4 = fruits.slice(1, -1); // ["Banana", "Cherry", "Date"]


// Splice----> The splice method is used to change the contents of an array by removing, replacing, or adding elements. Unlike slice, splice modifies the original array. The method takes at least two arguments: the start index and the number of elements to remove. Optionally, additional arguments can be provided to add new elements.

let fruit = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

let removedFruits1 = fruit.splice(1, 2); // Removes 2 elements starting from index 1
// fruits is now ["Apple", "Date", "Elderberry"]
// removedFruits1 is ["Banana", "Cherry"]

let removedFruits2 = fruit.splice(2, 0, "Fig", "Grape"); // Adds "Fig" and "Grape" at index 2 without removing elements
// fruits is now ["Apple", "Date", "Fig", "Grape", "Elderberry"]
// removedFruits2 is []

let removedFruits3 = fruit.splice(1, 1, "Honeydew"); // Removes 1 element at index 1 and adds "Honeydew"
// fruits is now ["Apple", "Honeydew", "Fig", "Grape", "Elderberry"]
// removedFruits3 is ["Date"]
