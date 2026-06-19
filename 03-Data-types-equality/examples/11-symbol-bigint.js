console.log("Symbol example:");

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);

const secretKey = Symbol("secret");

const user = {
	name: "Chandan",
	[secretKey]: "hidden-value",
};

console.log(user.name);
console.log(user[secretKey]);

console.log("\nFinding symbol keys:");

console.log(Object.getOwnPropertySymbols(user));

console.log("\nBigInt example:");

const bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);

console.log("\nBigInt arithmetic:");

console.log(10n + 5n);

console.log("\nCannot mix BigInt and Number directly:");

try {
	console.log(10n + 5);
} catch (err) {
	console.log(err.message);
}

console.log("\nJSON.stringify with BigInt:");

try {
	console.log(JSON.stringify({ id: 10n }));
} catch (err) {
	console.log(err.message);
}

/*
Expected Output includes:

Symbol example:
false
Chandan
hidden-value

Finding symbol keys:
[ Symbol(secret) ]

BigInt example:
123456789012345678901234567890n
bigint

BigInt arithmetic:
15n

Cannot mix BigInt and Number directly:
Cannot mix BigInt and other types, use explicit conversions

JSON.stringify with BigInt:
Do not know how to serialize a BigInt
*/
