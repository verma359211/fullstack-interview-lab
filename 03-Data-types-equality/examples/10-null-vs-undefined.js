let a;

let b = null;

console.log("a:", a);
console.log("b:", b);

console.log("\ntypeof:");
console.log("typeof undefined:", typeof a);
console.log("typeof null:", typeof b);

console.log("\nEquality:");
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);

console.log("\nObject property difference:");

const user = {
	name: "Chandan",
	profileImage: null,
};

console.log("profileImage:", user.profileImage);
console.log("age:", user.age);

console.log("\nJSON.stringify difference:");

const payload = {
	name: "Chandan",
	age: undefined,
	profileImage: null,
};

console.log(JSON.stringify(payload));

console.log("\nDefault parameter difference:");

function greet(name = "Guest") {
	console.log(name);
}

greet();
greet(undefined);
greet(null);

/*
Expected Output:

a: undefined
b: null

typeof:
typeof undefined: undefined
typeof null: object

Equality:
null == undefined: true
null === undefined: false

Object property difference:
profileImage: null
age: undefined

JSON.stringify difference:
{"name":"Chandan","profileImage":null}

Default parameter difference:
Guest
Guest
null
*/
