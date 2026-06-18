# Data Types and Equality in JavaScript

## Topics Covered

- Primitive vs Reference Types
- string
- number
- boolean
- null
- undefined
- symbol
- bigint
- Objects
- Arrays
- Functions
- typeof
- instanceof
- Truthy and Falsy Values
- Type Coercion
- == vs === vs Object.is
- NaN
- Number.isNaN
- null vs undefined

---

## 1. JavaScript Is Dynamically Typed

JavaScript is dynamically typed.

That means variables do not have fixed types.

The value has a type, not the variable.

```js
let value = 10;

value = "hello";

value = true;
```

This is valid JavaScript.

The same variable can hold different types at different times.

This flexibility is useful, but it also creates confusing behavior.

Example:

```js
console.log("5" + 1); // "51"
console.log("5" - 1); // 4
```

The first expression becomes string concatenation.

The second expression becomes numeric subtraction.

This happens because JavaScript performs automatic type conversion in some situations.

This automatic conversion is called type coercion.

---

## 2. Two Main Categories of Data Types

JavaScript values are divided into two main categories:

```text
Primitive Types
Reference Types
```

Primitive types are simple values.

Reference types are objects stored and accessed through references.

---

## 3. Primitive Types

JavaScript has 7 primitive types:

```text
string
number
boolean
null
undefined
symbol
bigint
```

Primitive values are copied by value.

Example:

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Changing `b` does not affect `a`.

Reason:

```text
a has its own value: 10
b receives a copy of that value
```

After changing `b`, `a` still remains unchanged.

---

## 4. Reference Types

Reference types include:

```text
object
array
function
date
map
set
regexp
```

Objects, arrays, and functions are the most important reference types for interviews.

Reference values are copied by reference.

Example:

```js
const user1 = {
  name: "Chandan"
};

const user2 = user1;

user2.name = "Verma";

console.log(user1.name); // "Verma"
console.log(user2.name); // "Verma"
```

Both variables point to the same object in memory.

Mental model:

```text
user1 ─┐
       ↓
     { name: "Chandan" }
       ↑
user2 ─┘
```

When the object changes, both variables see the change.

---

## 5. Primitive vs Reference Equality

Primitive values are compared by value.

```js
console.log(10 === 10); // true
console.log("hello" === "hello"); // true
```

Reference values are compared by reference.

```js
console.log({} === {}); // false
console.log([] === []); // false
```

Each object or array literal creates a new object in memory.

Example:

```js
const a = {};
const b = {};

console.log(a === b); // false
```

Even though both objects look the same, they are different objects.

But:

```js
const x = {};
const y = x;

console.log(x === y); // true
```

Here both variables point to the same object.

Interview answer:

Primitive values are compared by value. Objects, arrays, and functions are compared by reference.

---

## 6. string

A string represents text.

```js
let name = "Chandan";
let city = 'Kolkata';
let message = `Hello ${name}`;
```

Strings are primitive values.

Strings are immutable.

That means the original string cannot be changed.

Example:

```js
let text = "hello";

text[0] = "H";

console.log(text); // "hello"
```

String methods return new strings.

```js
let text = "hello";

let upper = text.toUpperCase();

console.log(text);  // "hello"
console.log(upper); // "HELLO"
```

---

## 7. number

JavaScript has one main numeric type: `number`.

It is used for both integers and decimals.

```js
let age = 25;
let price = 99.99;
let temperature = -5;
```

Special numeric values:

```js
Infinity
-Infinity
NaN
```

Examples:

```js
console.log(10 / 0);      // Infinity
console.log(-10 / 0);     // -Infinity
console.log("abc" * 10);  // NaN
```

Important floating-point issue:

```js
console.log(0.1 + 0.2);
```

Output:

```text
0.30000000000000004
```

This happens because JavaScript numbers use binary floating-point representation.

Some decimal values cannot be represented perfectly in binary.

For money calculations, avoid relying on floating decimal calculations directly.

Better approach:

```js
const priceInPaise = 1000; // ₹10.00
```

Use integer units like paise or cents for safer calculations.

---

## 8. boolean

A boolean has only two values:

```js
true
false
```

Example:

```js
let isLoggedIn = true;
let hasPermission = false;
```

Booleans are used in conditions.

```js
if (isLoggedIn) {
  console.log("Show dashboard");
}
```

JavaScript conditions can also work with truthy and falsy values.

```js
if ("hello") {
  console.log("Runs");
}
```

This runs because `"hello"` is truthy.

---

## 9. undefined

`undefined` usually means a value has not been assigned.

Example:

```js
let name;

console.log(name); // undefined
```

Missing function arguments are also `undefined`.

```js
function greet(name) {
  console.log(name);
}

greet(); // undefined
```

A function without a return statement returns `undefined`.

```js
function test() {}

console.log(test()); // undefined
```

Missing object properties return `undefined`.

```js
const user = {
  name: "Chandan"
};

console.log(user.age); // undefined
```

In real projects, `undefined` often means:

```text
field missing
argument not passed
value not initialized
property does not exist
function returned nothing
```

---

## 10. null

`null` means intentional absence of value.

Example:

```js
let selectedUser = null;
```

This means no user is selected right now.

In APIs and databases, `null` is commonly used to represent an empty value.

Example:

```js
const user = {
  id: 1,
  name: "Chandan",
  profileImage: null
};
```

This means the field exists, but it intentionally has no value.

---

## 11. null vs undefined

This is a very common interview question.

```js
let a;
let b = null;

console.log(a); // undefined
console.log(b); // null
```

Difference:

```text
undefined = value not assigned / missing
null      = intentionally empty value
```

Example:

```js
const user = {
  name: "Chandan",
  profileImage: null
};

console.log(user.profileImage); // null
console.log(user.age);          // undefined
```

`profileImage` exists and is intentionally empty.

`age` does not exist.

Equality behavior:

```js
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

`==` allows loose equality.

`===` checks both type and value.

One acceptable use of `==`:

```js
if (value == null) {
  console.log("value is either null or undefined");
}
```

This checks both:

```js
value === null || value === undefined
```

---

## 12. JSON Difference Between null and undefined

This is important in frontend and backend development.

```js
const user = {
  name: "Chandan",
  age: undefined,
  profileImage: null
};

console.log(JSON.stringify(user));
```

Output:

```json
{"name":"Chandan","profileImage":null}
```

The `undefined` field is removed.

The `null` field is kept.

This matters in API payloads.

```js
{
  discount: undefined
}
```

may mean:

```text
do not send discount field
```

But:

```js
{
  discount: null
}
```

may mean:

```text
send discount as empty / clear the discount
```

---

## 13. Default Parameters: undefined vs null

Default parameters only apply when the value is `undefined`.

```js
function greet(name = "Guest") {
  console.log(name);
}

greet();          // "Guest"
greet(undefined); // "Guest"
greet(null);      // null
```

`null` is treated as an intentional value.

---

## 14. symbol

A symbol is a unique primitive value.

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
```

Even if two symbols have the same description, they are unique.

Symbols are commonly used as unique object keys.

```js
const secretKey = Symbol("secret");

const user = {
  name: "Chandan",
  [secretKey]: "hidden-value"
};

console.log(user.name);       // "Chandan"
console.log(user[secretKey]); // "hidden-value"
```

Symbols help avoid property name conflicts.

They are not fully private, but they reduce accidental access and accidental naming collisions.

---

## 15. bigint

BigInt is used for very large integers.

```js
const bigNumber = 123456789012345678901234567890n;

console.log(typeof bigNumber); // "bigint"
```

The `n` at the end creates a BigInt.

BigInt is useful when numbers exceed JavaScript's safe integer limit.

Important rule:

```js
console.log(10n + 5); // TypeError
```

You cannot directly mix BigInt and Number.

Correct:

```js
console.log(10n + 5n); // 15n
```

or:

```js
console.log(Number(10n) + 5);
```

But converting a very large BigInt to Number can lose precision.

---

## 16. Objects

Objects store key-value pairs.

```js
const user = {
  name: "Chandan",
  age: 25
};
```

Access values:

```js
console.log(user.name);
console.log(user["age"]);
```

Objects are reference types.

```js
const a = { value: 10 };
const b = { value: 10 };

console.log(a === b); // false
```

They are different objects in memory.

This matters in React and state management because reference equality is used to detect changes.

---

## 17. Arrays

Arrays are ordered collections.

```js
const numbers = [10, 20, 30];
```

Arrays are objects internally.

```js
console.log(typeof []); // "object"
```

Correct way to check if a value is an array:

```js
Array.isArray([])
```

Output:

```js
true
```

Common interview question:

```js
console.log([] === []);
```

Output:

```js
false
```

Every `[]` creates a new array reference.

---

## 18. Functions

Functions are also objects in JavaScript.

```js
function greet() {
  console.log("Hello");
}

console.log(typeof greet); // "function"
```

Functions are callable objects.

They can have properties.

```js
function greet() {}

greet.language = "English";

console.log(greet.language); // "English"
```

Functions are first-class citizens.

That means functions can be:

```text
stored in variables
passed as arguments
returned from other functions
stored in objects
stored in arrays
```

This is the foundation for callbacks, higher-order functions, closures, React event handlers, middleware, and async JavaScript.

---

## 19. typeof

`typeof` checks the type of a value.

Examples:

```js
console.log(typeof "hello");   // "string"
console.log(typeof 10);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol());  // "symbol"
console.log(typeof 10n);       // "bigint"
```

Important traps:

```js
console.log(typeof null); // "object"
console.log(typeof []);   // "object"
console.log(typeof {});   // "object"
console.log(typeof NaN);  // "number"
console.log(typeof function () {}); // "function"
```

`typeof null` returning `"object"` is a historical JavaScript bug.

Correct null check:

```js
value === null
```

Correct array check:

```js
Array.isArray(value)
```

Correct function check:

```js
typeof value === "function"
```

Important trap:

```js
console.log(typeof notDeclared); // "undefined"
```

This does not throw an error.

But this can throw:

```js
console.log(typeof a);

let a = 10;
```

Output:

```text
ReferenceError
```

Reason:

`a` is in the Temporal Dead Zone.

So `typeof` is safe for undeclared variables, but not safe for variables in TDZ.

---

## 20. instanceof

`instanceof` checks whether an object exists in the prototype chain of a constructor.

Example:

```js
const arr = [];

console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true
```

Arrays are also objects.

Example with class:

```js
class User {}

const user = new User();

console.log(user instanceof User);   // true
console.log(user instanceof Object); // true
```

Important trap:

```js
console.log("hello" instanceof String); // false
```

Reason:

`"hello"` is a primitive string.

But:

```js
console.log(new String("hello") instanceof String); // true
```

`new String("hello")` creates a String object wrapper.

Avoid:

```js
new String()
new Number()
new Boolean()
```

They create object wrappers and can cause confusing behavior.

Example:

```js
const value = new Boolean(false);

if (value) {
  console.log("Runs");
}
```

This runs because objects are truthy.

---

## 21. Truthy and Falsy Values

JavaScript converts values to boolean in conditions.

```js
if ("hello") {
  console.log("Runs");
}
```

`"hello"` is truthy.

Falsy values:

```text
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is truthy.

Truthy examples:

```js
Boolean("false"); // true
Boolean("0");     // true
Boolean([]);      // true
Boolean({});      // true
Boolean(function () {}); // true
```

Important:

Empty arrays and empty objects are truthy.

```js
if ([]) {
  console.log("Runs");
}

if ({}) {
  console.log("Runs");
}
```

For arrays, check length:

```js
if (items.length > 0) {
  console.log("Items exist");
}
```

Do not rely only on:

```js
if (items) {}
```

because an empty array is also truthy.

---

## 22. Type Coercion

Type coercion means JavaScript automatically converts one type into another.

Example:

```js
console.log("5" + 1); // "51"
console.log("5" - 1); // 4
```

The `+` operator can mean numeric addition or string concatenation.

If one operand is a string, JavaScript often converts the other operand to a string.

```js
"5" + 1
"5" + "1"
"51"
```

The `-` operator only makes sense for numbers.

```js
"5" - 1
5 - 1
4
```

More examples:

```js
console.log(true + 1);      // 2
console.log(false + 1);     // 1
console.log(null + 1);      // 1
console.log(undefined + 1); // NaN
```

Conversions:

```text
true      → 1
false     → 0
null      → 0
undefined → NaN
```

Array coercion:

```js
console.log([] + 1);      // "1"
console.log([1] + 1);     // "11"
console.log([1, 2] + 1);  // "1,21"
```

Reason:

Arrays convert to strings.

```js
String([])      // ""
String([1])     // "1"
String([1, 2])  // "1,2"
```

---

## 23. == vs ===

`==` means loose equality.

It allows type coercion.

```js
console.log("5" == 5); // true
```

JavaScript converts `"5"` to number.

```js
5 == 5
```

So the result is true.

`===` means strict equality.

It does not allow type coercion.

```js
console.log("5" === 5); // false
```

Because one value is a string and the other is a number.

Best practice:

Use `===` by default.

Use `==` only when coercion is intentional.

---

## 24. Common == Traps

```js
console.log(false == 0);      // true
console.log(false == "");     // true
console.log(0 == "");         // true
console.log(null == undefined); // true
```

Reasons:

```text
false → 0
""    → 0
null and undefined are loosely equal by special rule
```

But:

```js
console.log(null == 0);      // false
console.log(null == false);  // false
console.log(undefined == 0); // false
```

So do not assume everything simply converts to number.

---

## 25. [] == false

This is a famous interview question.

```js
console.log([] == false);
```

Output:

```js
true
```

Step-by-step:

```js
[] == false
```

`false` becomes `0`.

```js
[] == 0
```

Array becomes primitive.

```js
"" == 0
```

Empty string becomes number.

```js
0 == 0
```

Result:

```js
true
```

But:

```js
console.log([] === false);
```

Output:

```js
false
```

Strict equality does not perform coercion.

---

## 26. [] == ![]

Another famous trap:

```js
console.log([] == ![]);
```

Output:

```js
true
```

Step-by-step:

```js
![]
```

An empty array is truthy.

So:

```js
![] // false
```

Now expression becomes:

```js
[] == false
```

Which is true because of coercion.

---

## 27. Object Equality

Objects are compared by reference.

```js
console.log({} === {}); // false
console.log([] === []); // false
```

Even with loose equality:

```js
console.log({} == {}); // false
console.log([] == []); // false
```

Different object references are not equal.

But:

```js
const a = {};
const b = a;

console.log(a === b); // true
```

Both variables point to the same object.

---

## 28. Object.is

`Object.is()` is another equality comparison method.

It is similar to `===`, but has special behavior for `NaN`, `0`, and `-0`.

```js
console.log(NaN === NaN);         // false
console.log(Object.is(NaN, NaN)); // true
```

And:

```js
console.log(0 === -0);         // true
console.log(Object.is(0, -0)); // false
```

So:

```text
=== treats NaN as not equal to itself
Object.is treats NaN as equal to itself

=== treats 0 and -0 as equal
Object.is treats 0 and -0 as different
```

Normal object references are still compared by reference.

```js
Object.is({}, {}); // false
```

---

## 29. NaN

`NaN` means Not-a-Number.

But:

```js
console.log(typeof NaN); // "number"
```

`NaN` is a special numeric value representing an invalid number result.

Examples:

```js
console.log("abc" * 10);      // NaN
console.log(Number("hello")); // NaN
console.log(0 / 0);           // NaN
```

Important trap:

```js
console.log(NaN === NaN); // false
```

NaN is not equal to anything, including itself.

Wrong check:

```js
if (value === NaN) {
  console.log("Invalid number");
}
```

This will never be true.

Correct check:

```js
Number.isNaN(value)
```

---

## 30. isNaN vs Number.isNaN

Global `isNaN()` performs type coercion.

```js
console.log(isNaN("hello")); // true
```

Reason:

```js
Number("hello") // NaN
```

But:

```js
console.log(isNaN("123")); // false
```

Reason:

```js
Number("123") // 123
```

`Number.isNaN()` does not perform coercion.

```js
console.log(Number.isNaN("hello")); // false
console.log(Number.isNaN(NaN));     // true
```

Best practice:

Use `Number.isNaN()` when you want to check whether the value is actually `NaN`.

---

## 31. Main Mental Model

```text
Primitive = actual value
Reference = address/reference to object
```

For primitives:

```js
let a = 10;
let b = a;
```

Means:

```text
b gets a copy of 10
```

For objects:

```js
const a = {};
const b = a;
```

Means:

```text
b gets a copy of the reference
both point to the same object
```

For equality:

```text
Primitive equality checks value
Reference equality checks whether both variables point to the same object
```

For coercion:

```text
== allows conversion
=== avoids conversion
Object.is is like strict equality with special handling for NaN and -0
```

For null and undefined:

```text
undefined = not assigned / missing
null      = intentionally empty
```

---

## 32. Interview Summary

JavaScript has primitive and reference types.

Primitive types are:

```text
string, number, boolean, null, undefined, symbol, bigint
```

Reference types include:

```text
objects, arrays, functions
```

Primitive values are copied by value.

Reference values are copied by reference.

`typeof` is useful, but has traps:

```js
typeof null // "object"
typeof []   // "object"
typeof NaN  // "number"
```

Use:

```js
value === null
Array.isArray(value)
Number.isNaN(value)
```

`==` compares after type coercion.

`===` compares without type coercion.

`Object.is()` is similar to `===`, but handles `NaN`, `0`, and `-0` differently.

Objects and arrays are compared by reference, not by structure.

Understanding data types and equality is necessary for JavaScript interviews, React state updates, backend validation, API payload handling, and debugging output-based questions.