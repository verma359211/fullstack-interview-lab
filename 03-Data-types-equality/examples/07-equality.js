console.log("'5' == 5:", "5" == 5);
console.log("'5' === 5:", "5" === 5);

console.log("\nBoolean equality:");
console.log("false == 0:", false == 0);
console.log("false === 0:", false === 0);
console.log("false == '':", false == "");
console.log("0 == '':", 0 == "");

console.log("\nnull and undefined:");
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);
console.log("null == 0:", null == 0);
console.log("null == false:", null == false);

console.log("\nArray equality traps:");
console.log("[] == false:", [] == false);
console.log("[] === false:", [] === false);
console.log("[] == '':", [] == "");
console.log("[] === []:", [] === []);

console.log("\nObject equality:");
console.log("{} === {}:", {} === {});

const arr = [];
const sameArr = arr;

console.log("same array reference:", arr === sameArr);

/*
Expected Output:

'5' == 5: true
'5' === 5: false

Boolean equality:
false == 0: true
false === 0: false
false == '': true
0 == '': true

null and undefined:
null == undefined: true
null === undefined: false
null == 0: false
null == false: false

Array equality traps:
[] == false: true
[] === false: false
[] == '': true
[] === []: false

Object equality:
{} === {}: false
same array reference: true
*/
