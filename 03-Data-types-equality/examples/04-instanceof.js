const arr = [];

console.log("Array checks:");
console.log(arr instanceof Array);
console.log(arr instanceof Object);

const obj = {};

console.log("\nObject checks:");
console.log(obj instanceof Object);
console.log(obj instanceof Array);

class User {}

const user = new User();

console.log("\nClass instance checks:");
console.log(user instanceof User);
console.log(user instanceof Object);

console.log("\nPrimitive vs object wrapper:");

console.log("hello" instanceof String);
console.log(new String("hello") instanceof String);

console.log("\nDanger of object wrappers:");

const value = new Boolean(false);

if (value) {
	console.log("This runs because objects are truthy");
}

/*
Expected Output:

Array checks:
true
true

Object checks:
true
false

Class instance checks:
true
true

Primitive vs object wrapper:
false
true

Danger of object wrappers:
This runs because objects are truthy
*/
