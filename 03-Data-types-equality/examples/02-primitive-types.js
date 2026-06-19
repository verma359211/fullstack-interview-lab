const name = "Chandan";
const age = 25;
const isLoggedIn = true;
const emptyValue = null;
let notAssigned;
const uniqueId = Symbol("id");
const bigNumber = 12345678901234567890n;

console.log("string:", name);
console.log("number:", age);
console.log("boolean:", isLoggedIn);
console.log("null:", emptyValue);
console.log("undefined:", notAssigned);
console.log("symbol:", uniqueId);
console.log("bigint:", bigNumber);

console.log("\nTypes:");
console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof emptyValue);
console.log(typeof notAssigned);
console.log(typeof uniqueId);
console.log(typeof bigNumber);

/*
Expected Output:

string: Chandan
number: 25
boolean: true
null: null
undefined: undefined
symbol: Symbol(id)
bigint: 12345678901234567890n

Types:
string
number
boolean
object
undefined
symbol
bigint
*/
