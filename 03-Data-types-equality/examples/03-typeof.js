console.log(typeof "hello");
console.log(typeof 10);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol("id"));
console.log(typeof 10n);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});
console.log(typeof NaN);

console.log("\nCorrect checks:");

const value1 = null;
const value2 = [];
const value3 = function () {};

console.log("null check:", value1 === null);
console.log("array check:", Array.isArray(value2));
console.log("function check:", typeof value3 === "function");

console.log("\ntypeof undeclared variable:");
console.log(typeof notDeclared);

console.log("\ntypeof with TDZ:");

try {
	console.log(typeof a);
	let a = 10;
} catch (err) {
	console.log(err.message);
}

/*
Expected Output:

string
number
boolean
undefined
object
symbol
bigint
object
object
function
number

Correct checks:
null check: true
array check: true
function check: true

typeof undeclared variable:
undefined

typeof with TDZ:
Cannot access 'a' before initialization
*/
