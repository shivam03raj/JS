const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); // This changes the datatype of number to string and gives the length of that string. 
console.log(balance.toFixed(1)); // toFixed is used to fix the number of digits after decimal point

const otherNumber = 123.4932

console.log(otherNumber.toPrecision(4)); // Gives the precise value for upto 3 digits.

const num = 1000000
console.log(num.toLocaleString('en-IN')); // Gives the number a number system. It is US number system by default but we can mention the desired number system as well.

//-------------------Maths---------------------------

console.log(Math) // Math is an object
console.log(Math.abs(-4)); // Abs means absolute it changes any negative number to positive.
console.log(Math.round(4.6));
console.log(Math.ceil(4.6)); // It rounds the number to the top
console.log(Math.floor(4.6)); // It rounds the number to the botttom
console.log(Math.min(2,5,4,98,7,1));
console.log(Math.max(2,5,4,98,7,1));

console.log(Math.random()); // Gives a random value between 0 and 1 each time.  
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)