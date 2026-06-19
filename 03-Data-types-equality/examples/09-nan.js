const values = [NaN, "hello", "123", 123, undefined, null, {}, []];

console.log("Using global isNaN:");
values.forEach((value) => {
	console.log(String(value), "=>", isNaN(value));
});

console.log("\nUsing Number.isNaN:");
values.forEach((value) => {
	console.log(String(value), "=>", Number.isNaN(value));
});

console.log("\nImportant NaN facts:");
console.log("typeof NaN:", typeof NaN);
console.log("NaN === NaN:", NaN === NaN);
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));

console.log("\nCorrect validation example:");

const input = "abc";
const numberValue = Number(input);

if (Number.isNaN(numberValue)) {
	console.log("Invalid number");
}

/*
Expected Output includes:

Using global isNaN:
NaN => true
hello => true
123 => false
123 => false
undefined => true
null => false
[object Object] => true
 => false

Using Number.isNaN:
NaN => true
hello => false
123 => false
123 => false
undefined => false
null => false
[object Object] => false
 => false

Important NaN facts:
typeof NaN: number
NaN === NaN: false
Number.isNaN(NaN): true

Correct validation example:
Invalid number
*/
