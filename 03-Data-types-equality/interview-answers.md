# Interview Answers: Data Types and Equality

## 1. What are primitive data types in JavaScript?

JavaScript has 7 primitive data types:

```text
string
number
boolean
null
undefined
symbol
bigint
```

Primitive values are immutable and copied by value.

---

## 2. What are reference data types?

Reference data types are objects.

Examples:

```text
object
array
function
date
map
set
regexp
```

They are copied by reference.

---

## 3. Primitive vs Reference Types

Primitive values are copied by value.

Reference values are copied by reference.

Example:

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
```

But:

```js
const obj1 = { value: 10 };
const obj2 = obj1;

obj2.value = 20;

console.log(obj1.value); // 20
```

---

## 4. What is typeof null?

```js
typeof null
```

returns:

```js
"object"
```

This is a historical JavaScript bug kept for backward compatibility.

Correct null check:

```js
value === null
```

---

## 5. What is typeof []?

```js
typeof []
```

returns:

```js
"object"
```

Arrays are objects internally.

Correct array check:

```js
Array.isArray(value)
```

---

## 6. Difference between null and undefined

`undefined` means a value has not been assigned or is missing.

`null` means intentional absence of value.

Example:

```js
let a;
let b = null;
```

`a` is undefined.

`b` is intentionally empty.

---

## 7. What is NaN?

NaN means Not-a-Number.

It represents an invalid numeric result.

Example:

```js
"abc" * 10
```

Output:

```js
NaN
```

Important:

```js
typeof NaN
```

returns:

```js
"number"
```

---

## 8. Why is NaN === NaN false?

NaN is defined as not equal to anything, including itself.

```js
NaN === NaN
```

returns:

```js
false
```

Correct check:

```js
Number.isNaN(value)
```

---

## 9. Difference between isNaN and Number.isNaN

Global `isNaN()` performs type coercion.

```js
isNaN("hello") // true
```

Because `"hello"` is converted to `NaN`.

`Number.isNaN()` does not perform coercion.

```js
Number.isNaN("hello") // false
Number.isNaN(NaN)     // true
```

Best practice:

Use `Number.isNaN()`.

---

## 10. Difference between == and ===

`==` compares values after type coercion.

```js
"5" == 5 // true
```

`===` compares both type and value without coercion.

```js
"5" === 5 // false
```

Best practice:

Use `===` by default.

---

## 11. What is Object.is?

`Object.is()` compares two values with special handling for `NaN`, `0`, and `-0`.

```js
Object.is(NaN, NaN) // true
Object.is(0, -0)   // false
```

With `===`:

```js
NaN === NaN // false
0 === -0    // true
```

---

## 12. What are truthy and falsy values?

Falsy values are values that become false in boolean context.

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

Examples:

```js
Boolean("false") // true
Boolean("0")     // true
Boolean([])      // true
Boolean({})      // true
```

---

## 13. What does instanceof check?

`instanceof` checks whether an object exists in the prototype chain of a constructor.

Example:

```js
const arr = [];

arr instanceof Array  // true
arr instanceof Object // true
```

It works with objects, not primitive values.

---

## 14. Why is {} === {} false?

Each object literal creates a new object reference.

```js
{} === {}
```

returns false because both objects are stored at different references.

Example:

```js
const a = {};
const b = a;

a === b // true
```

Here both variables refer to the same object.

---

## 15. Why is [] === [] false?

Each array literal creates a new array object.

```js
[] === []
```

returns false because they are different references.

---

## 16. What is Symbol?

A Symbol is a unique primitive value.

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

id1 === id2 // false
```

Symbols are often used as unique object property keys to avoid naming conflicts.

---

## 17. What is BigInt?

BigInt is used to represent integers larger than the safe limit of Number.

Example:

```js
const value = 12345678901234567890n;
```

The `n` at the end creates a BigInt.

BigInt and Number cannot be mixed directly.

```js
10n + 5 // TypeError
```

Correct:

```js
10n + 5n
```

---

## 18. Why does "5" + 1 return "51"?

The `+` operator can perform string concatenation.

When one operand is a string, JavaScript converts the other operand to string.

```js
"5" + 1
"5" + "1"
"51"
```

---

## 19. Why does "5" - 1 return 4?

The `-` operator only works as numeric subtraction.

JavaScript converts `"5"` to number.

```js
"5" - 1
5 - 1
4
```

---

## 20. Why is [] == false true?

Step-by-step:

```text
[] == false
[] == 0
"" == 0
0 == 0
true
```

This happens because loose equality performs type coercion.

---

## 21. Why is [] == ![] true?

First:

```js
![]
```

An empty array is truthy.

So:

```js
![] // false
```

Now:

```js
[] == false
```

This becomes true because of coercion.

---

## 22. Why should we avoid new Boolean(false)?

`new Boolean(false)` creates an object.

Objects are truthy.

Example:

```js
const value = new Boolean(false);

if (value) {
  console.log("Runs");
}
```

This runs even though the wrapped value is false.

Avoid object wrappers like:

```js
new String()
new Number()
new Boolean()
```

---

## 23. When is value == null acceptable?

This can be acceptable when we intentionally want to check both `null` and `undefined`.

```js
if (value == null) {
  // value is either null or undefined
}
```

It is equivalent to:

```js
value === null || value === undefined
```

In most other cases, prefer `===`.

---

## 24. Final Interview Summary

JavaScript has primitive and reference types.

Primitive values are copied by value.

Reference values are copied by reference.

`typeof` is useful but has traps.

```js
typeof null // "object"
typeof []   // "object"
typeof NaN  // "number"
```

Use:

```js
Array.isArray(value)
value === null
Number.isNaN(value)
```

Use `===` instead of `==` by default.

Use `Object.is()` when exact comparison behavior for `NaN`, `0`, and `-0` matters.

Objects and arrays are compared by reference, not by structure.