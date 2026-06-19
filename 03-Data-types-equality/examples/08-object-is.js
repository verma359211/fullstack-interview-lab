console.log("NaN comparison:");
console.log("NaN === NaN:", NaN === NaN);
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));

console.log("\n0 and -0:");
console.log("0 === -0:", 0 === -0);
console.log("Object.is(0, -0):", Object.is(0, -0));

console.log("\nNormal primitive comparisons:");
console.log("Object.is(10, 10):", Object.is(10, 10));
console.log("Object.is('hello', 'hello'):", Object.is("hello", "hello"));

console.log("\nObject references:");

const obj1 = {};
const obj2 = {};
const obj3 = obj1;

console.log("Object.is(obj1, obj2):", Object.is(obj1, obj2));
console.log("Object.is(obj1, obj3):", Object.is(obj1, obj3));

/*
Expected Output:

NaN comparison:
NaN === NaN: false
Object.is(NaN, NaN): true

0 and -0:
0 === -0: true
Object.is(0, -0): false

Normal primitive comparisons:
Object.is(10, 10): true
Object.is('hello', 'hello'): true

Object references:
Object.is(obj1, obj2): false
Object.is(obj1, obj3): true
*/
