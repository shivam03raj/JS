//Dates

// Date is an object

let date = new Date()
console.log(date.toString());
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(typeof(date))


let myDate = new Date(2024, 0, 24)
let createDate = new Date(2024, 0, 24, 9,23, 56) // Month begins from zero
let createdDate = new Date("01-14-2024")
console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(createdDate.getTime())
console.log(Math.floor(Date.now()/1000));

let newDate  = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",

})