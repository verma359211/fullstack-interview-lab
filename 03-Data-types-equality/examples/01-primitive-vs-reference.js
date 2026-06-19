console.log("Primitive values are copied by value");

let a = 10;
let b = a;

b = 20;

console.log("a:", a);
console.log("b:", b);

console.log("\nReference values are copied by reference");

const user1 = {
	name: "Chandan",
};

const user2 = user1;

user2.name = "Verma";

console.log("user1:", user1);
console.log("user2:", user2);

console.log("\nTwo similar-looking objects are not equal");

const obj1 = { value: 10 };
const obj2 = { value: 10 };

console.log(obj1 === obj2);

console.log("\nSame reference is equal");

const obj3 = obj1;

console.log(obj1 === obj3);

/*
Expected Output:

Primitive values are copied by value
a: 10
b: 20

Reference values are copied by reference
user1: { name: 'Verma' }
user2: { name: 'Verma' }

Two similar-looking objects are not equal
false

Same reference is equal
true
*/
