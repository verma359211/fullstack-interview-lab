# Output Practice: Data Types and Equality

Predict the output before running the code.

---

## Q1

```js
console.log(typeof null);
```

Answer:

```text
object
```

Reason:

Historical JavaScript bug. Use `value === null` to check null.

---

## Q2

```js
console.log(typeof []);
```

Answer:

```text
object
```

Reason:

Arrays are objects internally. Use `Array.isArray()`.

---

## Q3

```js
console.log(typeof NaN);
```

Answer:

```text
number
```

Reason:

NaN is a special numeric value.

---

## Q4

```js
console.log("5" + 1);
console.log("5" - 1);
```

Answer:

```text
51
4
```

Reason:

`+` performs string concatenation when one operand is a string.

`-` performs numeric subtraction.

---

## Q5

```js
console.log("5" == 5);
console.log("5" === 5);
```

Answer:

```text
true
false
```

Reason:

`==` allows coercion.

`===` does not allow coercion.

---

## Q6

```js
console.log(null == undefined);
console.log(null === undefined);
```

Answer:

```text
true
false
```

Reason:

`null` and `undefined` are loosely equal by special rule.

They are different types, so strict equality returns false.

---

## Q7

```js
console.log(NaN === NaN);
console.log(Number.isNaN(NaN));
```

Answer:

```text
false
true
```

Reason:

NaN is not equal to itself.

Use `Number.isNaN()` to check NaN.

---

## Q8

```js
console.log(false == 0);
console.log(false === 0);
```

Answer:

```text
true
false
```

Reason:

`false` becomes `0` during loose equality.

Strict equality does not convert types.

---

## Q9

```js
console.log([] == false);
console.log([] === false);
```

Answer:

```text
true
false
```

Reason:

For `[] == false`:

```text
[] == false
[] == 0
"" == 0
0 == 0
true
```

For `[] === false`, no coercion happens.

---

## Q10

```js
console.log({} === {});
console.log([] === []);
```

Answer:

```text
false
false
```

Reason:

Objects and arrays are compared by reference.

Each literal creates a new reference.

---

## Q11

```js
const a = { value: 10 };
const b = a;

b.value = 20;

console.log(a.value);
```

Answer:

```text
20
```

Reason:

Both variables point to the same object.

---

## Q12

```js
let a = 10;
let b = a;

b = 20;

console.log(a);
```

Answer:

```text
10
```

Reason:

Primitive values are copied by value.

---

## Q13

```js
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));
```

Answer:

```text
true
false
```

Reason:

`Object.is()` treats `NaN` as equal to itself.

It treats `0` and `-0` as different.

---

## Q14

```js
console.log(Boolean("false"));
console.log(Boolean("0"));
console.log(Boolean([]));
console.log(Boolean({}));
```

Answer:

```text
true
true
true
true
```

Reason:

Non-empty strings are truthy.

Arrays and objects are truthy.

---

## Q15

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
```

Answer:

```text
false
```

Reason:

Every Symbol is unique.

---

## Q16

```js
function greet(name = "Guest") {
  console.log(name);
}

greet();
greet(undefined);
greet(null);
```

Answer:

```text
Guest
Guest
null
```

Reason:

Default parameters apply only when the argument is `undefined`.

`null` is treated as an intentional value.

---

## Q17

```js
const user = {
  name: "Chandan",
  age: undefined,
  profileImage: null,
};

console.log(JSON.stringify(user));
```

Answer:

```text
{"name":"Chandan","profileImage":null}
```

Reason:

`JSON.stringify()` removes object properties whose value is `undefined`.

It keeps `null`.

---

## Q18

```js
console.log([] == ![]);
```

Answer:

```text
true
```

Reason:

```text
[] is truthy
![] becomes false

[] == false
[] == 0
"" == 0
0 == 0
true
```

---

## Q19

```js
console.log(isNaN("hello"));
console.log(Number.isNaN("hello"));
```

Answer:

```text
true
false
```

Reason:

`isNaN()` coerces `"hello"` to number first.

`Number.isNaN()` does not coerce.

---

## Q20

```js
const value = new Boolean(false);

if (value) {
  console.log("Runs");
} else {
  console.log("Does not run");
}
```

Answer:

```text
Runs
```

Reason:

`new Boolean(false)` creates an object.

Objects are truthy.