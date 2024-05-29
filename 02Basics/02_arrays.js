const marvel_heroes = ["thor", "spiderman", "ironman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);  // Since, the fourth element is an array itself,so to access the element of the 4th element, the given syntax is used

const all_heroes = marvel_heroes.concat(dc_heroes)  // It return a new array after merging two or more arrays. It does not modify or change the original arrays.
console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

console.log(all_new_heroes)

const another_array = [1 ,2 ,3 ,[4 ,5 ,6 ],7 ,[6 ,7 ,[4 ,5 ]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);  // The flat method in JavaScript is used to create a new array with all sub-array elements concatenated into it recursively up to the specified depth. This method is particularly useful for flattening nested arrays.



console.log(Array.isArray("Shivam"))  // The Array.isArray method is used to determine whether a value is an array. It returns true if the value is an array, and false otherwise.
console.log(Array.from("Shivam"))  // The Array.from method is used to create a new array instance from an array-like or iterable object. This can include objects like arguments, NodeLists, Sets, Maps, or even strings.
console.log(Array.from({name: "Shivam"}))  // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));