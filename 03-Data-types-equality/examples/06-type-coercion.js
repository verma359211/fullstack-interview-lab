console.log("String + Number:");
console.log("5" + 1);

console.log("\nString - Number:");
console.log("5" - 1);

console.log("\nBoolean coercion:");
console.log(true + 1);
console.log(false + 1);

console.log("\nnull and undefined coercion:");
console.log(null + 1);
console.log(undefined + 1);

console.log("\nArray coercion:");
console.log([] + 1);
console.log([1] + 1);
console.log([1, 2] + 1);

console.log("\nString conversion:");
console.log(String([]));
console.log(String([1]));
console.log(String([1, 2]));

/*
Expected Output:

String + Number:
51

String - Number:
4

Boolean coercion:
2
1

null and undefined coercion:
1
NaN

Array coercion:
1
11
1,21

String conversion:

1
1,2
*/
