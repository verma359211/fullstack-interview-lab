# Output Practice: Functions

Predict the output before running the code.

---

## Q1

```js
sayHi();

function sayHi() {
  console.log("Hi");
}
```

Answer:

```text
Hi
```

Reason:

Function declarations are fully hoisted.

---

## Q2

```js
sayHi();

var sayHi = function () {
  console.log("Hi");
};
```

Answer:

```text
TypeError: sayHi is not a function
```

Reason:

`var sayHi` is hoisted as `undefined`.

Execution tries to call `undefined()`.

---

## Q3

```js
sayHi();

const sayHi = function () {
  console.log("Hi");
};
```

Answer:

```text
ReferenceError
```

Reason:

`sayHi` is in the Temporal Dead Zone before initialization.

---

## Q4

```js
const add = (a, b) => a + b;

console.log(add(2, 3));
```

Answer:

```text
5
```

Reason:

Arrow function returns the expression result.

---

## Q5

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter();
counter();
counter();
```

Answer:

```text
1
2
3
```

Reason:

The inner function forms a closure over `count`.

---

## Q6

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

Answer:

```text
4
4
4
```

Reason:

`var` is function-scoped. All callbacks share the same `i`.

By the time callbacks run, the loop has completed and `i` is `4`.

---

## Q7

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

Answer:

```text
1
2
3
```

Reason:

`let` creates a new binding for each loop iteration.

---

## Q8

```js
function greet(name = "Guest") {
  console.log(name);
}

greet();
greet(undefined);
greet(null);
greet("");
```

Answer:

```text
Guest
Guest
null

```

Reason:

Default parameters apply only for `undefined`.

`null` and empty string are actual passed values.

---

## Q9

```js
function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3);
```

Answer:

```text
[1, 2, 3]
```

Reason:

Rest parameters collect arguments into a real array.

---

## Q10

```js
function test() {
  console.log(arguments[0]);
  console.log(arguments.length);
}

test("a", "b", "c");
```

Answer:

```text
a
3
```

Reason:

Normal functions have an `arguments` object.

---

## Q11

```js
const add = a => b => c => a + b + c;

console.log(add(1)(2)(3));
```

Answer:

```text
6
```

Reason:

This is currying. Each function remembers the previous argument through closure.

---

## Q12

```js
const double = x => x * 2;
const square = x => x * x;

console.log(square(double(3)));
```

Answer:

```text
36
```

Reason:

`double(3)` gives `6`.

`square(6)` gives `36`.

---

## Q13

```js
function greet() {
  console.log("Hello " + this.name);
}

const user = {
  name: "Chandan",
};

greet.call(user);
```

Answer:

```text
Hello Chandan
```

Reason:

`call` invokes the function with `this` set to `user`.

---

## Q14

```js
function introduce(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

const user = {
  name: "Chandan",
};

introduce.apply(user, ["Kolkata", "India"]);
```

Answer:

```text
Chandan lives in Kolkata, India
```

Reason:

`apply` invokes the function with `this` set to `user` and arguments passed as an array.

---

## Q15

```js
function greet() {
  console.log("Hello " + this.name);
}

const user = {
  name: "Chandan",
};

const greetUser = greet.bind(user);

greetUser();
```

Answer:

```text
Hello Chandan
```

Reason:

`bind` returns a new function with fixed `this`.

---

## Q16

```js
function greet() {}

greet.language = "English";

console.log(typeof greet);
console.log(greet.language);
```

Answer:

```text
function
English
```

Reason:

Functions are callable objects, so properties can be added to them.

---

## Q17

```js
(function () {
  var secret = "hidden";
})();

console.log(secret);
```

Answer:

```text
ReferenceError
```

Reason:

`secret` is scoped inside the IIFE.

---

## Q18

```js
const user = {
  name: "Chandan",
  greet: () => {
    console.log(this.name);
  },
};

user.greet();
```

Answer:

```text
undefined
```

Reason:

Arrow functions do not have their own `this`.

They take `this` from the surrounding lexical scope.

---

## Q19

```js
const value = (function () {
  return 10;
})();

console.log(value);
```

Answer:

```text
10
```

Reason:

The function is immediately invoked and returns `10`.

---

## Q20

```js
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);

console.log(double(5));
```

Answer:

```text
10
```

Reason:

The returned function remembers `factor` through closure.