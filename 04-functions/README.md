# Functions in JavaScript

## Topics Covered

- Function declaration
- Function expression
- Arrow function
- Anonymous and named functions
- Callback functions
- Higher-order functions
- Pure functions
- IIFE
- Rest parameters
- Default parameters
- arguments object
- Closures
- Currying
- Function composition
- call, apply, bind

---

## 1. What is a Function?

A function is a reusable block of code.

```js
function greet() {
  console.log("Hello");
}

greet();
```

In JavaScript, functions are first-class citizens.

That means functions can be:

```text
stored in variables
passed as arguments
returned from other functions
stored in objects
stored in arrays
```

Example:

```js
const sayHi = function () {
  console.log("Hi");
};

function execute(callback) {
  callback();
}

execute(sayHi);
```

This is the foundation of callbacks, closures, promises, React event handlers, Express middleware, and functional programming.

---

## 2. Function Declaration

A function declaration uses the `function` keyword with a function name.

```js
function add(a, b) {
  return a + b;
}
```

Function declarations are hoisted with their complete definition.

```js
console.log(add(2, 3));

function add(a, b) {
  return a + b;
}
```

Output:

```text
5
```

During the creation phase, JavaScript stores the complete function in memory.

---

## 3. Function Expression

A function expression means assigning a function to a variable.

```js
const add = function (a, b) {
  return a + b;
};
```

Function expressions follow variable hoisting rules.

With `const` or `let`, the variable is in the Temporal Dead Zone before initialization.

```js
console.log(add(2, 3));

const add = function (a, b) {
  return a + b;
};
```

Output:

```text
ReferenceError
```

With `var`:

```js
console.log(add(2, 3));

var add = function (a, b) {
  return a + b;
};
```

Output:

```text
TypeError: add is not a function
```

Reason:

During creation phase:

```text
add → undefined
```

Then execution tries to call:

```js
undefined(2, 3)
```

---

## 4. Function Declaration vs Function Expression

Main difference:

```text
Function declaration → fully hoisted
Function expression  → follows variable hoisting rules
```

Function declaration:

```js
sayHi();

function sayHi() {
  console.log("Hi");
}
```

Works.

Function expression:

```js
sayHi();

const sayHi = function () {
  console.log("Hi");
};
```

Throws ReferenceError.

---

## 5. Arrow Functions

Arrow functions were introduced in ES6.

```js
const add = (a, b) => {
  return a + b;
};
```

Short form:

```js
const add = (a, b) => a + b;
```

One parameter:

```js
const square = x => x * x;
```

No parameter:

```js
const greet = () => console.log("Hello");
```

Arrow functions are common in React and modern JavaScript.

---

## 6. Important Differences of Arrow Functions

Arrow functions are not just shorter syntax.

They have important differences:

```text
1. They do not have their own this
2. They do not have their own arguments object
3. They cannot be used as constructors
4. They are not hoisted like function declarations
```

Do not use arrow functions as object methods when you need `this`.

Bad:

```js
const user = {
  name: "Chandan",
  greet: () => {
    console.log(this.name);
  },
};
```

Better:

```js
const user = {
  name: "Chandan",
  greet() {
    console.log(this.name);
  },
};
```

---

## 7. Anonymous Functions

An anonymous function has no name.

```js
const greet = function () {
  console.log("Hello");
};
```

Anonymous functions are often used as callbacks.

```js
setTimeout(function () {
  console.log("Runs later");
}, 1000);
```

They are useful for one-time use, but named functions are often better for debugging.

---

## 8. Named Functions

A named function has a name.

```js
function greet() {
  console.log("Hello");
}
```

Named function expression:

```js
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
```

Named functions are useful for recursion and better stack traces.

---

## 9. Callback Functions

A callback is a function passed as an argument to another function.

```js
function greetUser(name, callback) {
  console.log("Hello " + name);
  callback();
}

greetUser("Chandan", function () {
  console.log("Callback executed");
});
```

Callbacks are used in:

```text
event handlers
array methods
setTimeout
API calls
Node.js filesystem methods
React props
Express route handlers
```

Interview answer:

A callback is a function passed into another function to be executed later.

---

## 10. Higher-Order Functions

A higher-order function is a function that:

```text
takes another function as an argument
or
returns another function
```

Example:

```js
function operate(a, b, operation) {
  return operation(a, b);
}

const result = operate(5, 3, function (x, y) {
  return x + y;
});
```

Array methods like `map`, `filter`, and `reduce` are higher-order functions.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);
```

---

## 11. Pure Functions

A pure function follows two rules:

```text
1. Same input always gives same output
2. No side effects
```

Pure function:

```js
function add(a, b) {
  return a + b;
}
```

Impure function:

```js
let total = 0;

function addToTotal(value) {
  total += value;
  return total;
}
```

The impure function modifies outside state.

Pure functions are easier to test, debug, reuse, and reason about.

React reducers and Redux reducers should be pure.

---

## 12. Side Effects

A side effect is anything a function does outside returning a value.

Examples:

```text
modifying global variables
modifying input objects
console.log
API calls
database writes
DOM manipulation
localStorage changes
file system writes
timers
```

Impure:

```js
function updateUser(user) {
  user.name = "Updated";
}
```

Pure alternative:

```js
function updateUser(user) {
  return {
    ...user,
    name: "Updated",
  };
}
```

---

## 13. IIFE

IIFE means Immediately Invoked Function Expression.

```js
(function () {
  console.log("IIFE running");
})();
```

It runs immediately after creation.

IIFE was commonly used to create private scope before ES modules and `let`/`const`.

```js
(function () {
  var secret = "hidden";
  console.log(secret);
})();

console.log(secret); // ReferenceError
```

Arrow IIFE:

```js
(() => {
  console.log("Arrow IIFE");
})();
```

---

## 14. Parameters vs Arguments

Parameter means variable in function definition.

Argument means actual value passed during function call.

```js
function greet(name) {
  console.log(name);
}

greet("Chandan");
```

Here:

```text
name      → parameter
"Chandan" → argument
```

---

## 15. Default Parameters

Default parameters provide fallback values.

```js
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet("Chandan");
greet();
```

Output:

```text
Hello Chandan
Hello Guest
```

Default parameters apply only when the argument is `undefined`.

```js
greet(undefined); // Guest
greet(null);      // null
greet("");        // ""
greet(0);         // 0
```

---

## 16. Rest Parameters

Rest parameters collect multiple arguments into a real array.

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));
```

Output:

```text
10
```

Rest parameter must be the last parameter.

Valid:

```js
function test(name, ...args) {}
```

Invalid:

```js
function test(...args, name) {}
```

---

## 17. arguments Object

Normal functions have an `arguments` object.

```js
function showArguments() {
  console.log(arguments);
}

showArguments(1, 2, 3);
```

`arguments` is array-like, not a real array.

It has indexes and length, but not normal array methods.

Modern JavaScript prefers rest parameters.

```js
function showArguments(...args) {
  console.log(args);
}
```

Arrow functions do not have their own `arguments`.

---

## 18. Closures

A closure happens when an inner function remembers variables from its outer function even after the outer function has finished executing.

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

Output:

```text
1
2
3
```

The inner function remembers `count`.

Interview answer:

A closure is created when a function remembers variables from its outer lexical scope even after the outer function has finished execution.

---

## 19. Why Closures Are Useful

Closures are used for:

```text
private variables
debounce
throttle
memoization
once function
React hooks
event handlers
function factories
currying
module patterns
```

Example private variable:

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },

    getBalance() {
      return balance;
    },
  };
}
```

`balance` is private, but returned methods can access it through closure.

---

## 20. Closure Trap with var

Classic interview question:

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

Output:

```text
4
4
4
```

Reason:

`var` is function-scoped. There is one shared `i`.

With `let`:

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

Output:

```text
1
2
3
```

Reason:

`let` creates a new block-scoped binding for each loop iteration.

---

## 21. Currying

Currying transforms a function with multiple arguments into nested functions that take one argument at a time.

Normal:

```js
function add(a, b, c) {
  return a + b + c;
}
```

Curried:

```js
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3));
```

Output:

```text
6
```

Arrow version:

```js
const add = a => b => c => a + b + c;
```

Currying is useful for creating reusable partially configured functions.

---

## 22. Function Composition

Function composition means combining small functions to create a larger function.

```js
const double = x => x * 2;
const square = x => x * x;

const result = square(double(3));

console.log(result);
```

Output:

```text
36
```

A basic compose function:

```js
const compose = (f, g) => value => f(g(value));
```

Composition is useful in data transformation, validation pipelines, middleware chains, and functional programming.

---

## 23. call, apply, bind

`call`, `apply`, and `bind` are used to control what `this` refers to inside a function.

### call

Calls the function immediately.

Arguments are passed one by one.

```js
function introduce(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

const user = {
  name: "Chandan",
};

introduce.call(user, "Kolkata", "India");
```

### apply

Calls the function immediately.

Arguments are passed as an array.

```js
introduce.apply(user, ["Kolkata", "India"]);
```

### bind

Does not call immediately.

Returns a new function with fixed `this`.

```js
const boundIntroduce = introduce.bind(user);

boundIntroduce("Kolkata", "India");
```

Summary:

```text
call  → invokes immediately, arguments one by one
apply → invokes immediately, arguments as array
bind  → returns new function with fixed this
```

---

## 24. Functions Are Objects

Functions are callable objects.

```js
function greet() {
  console.log("Hello");
}

greet.language = "English";

console.log(greet.language);
```

Output:

```text
English
```

Functions can have properties because they are objects with callable behavior.

---

## 25. Final Interview Summary

Function declarations are fully hoisted.

Function expressions follow variable hoisting rules.

Arrow functions do not have their own `this`, `arguments`, or constructor behavior.

Callbacks are functions passed to other functions.

Higher-order functions accept or return functions.

Pure functions return the same output for the same input and avoid side effects.

IIFE runs immediately and creates a private scope.

Rest parameters collect arguments into a real array.

The `arguments` object is array-like and exists only in normal functions.

Closures allow inner functions to remember outer variables.

Currying converts a multi-argument function into nested single-argument functions.

Function composition combines small functions into larger behavior.

`call`, `apply`, and `bind` control `this`.

Functions are one of the most important parts of JavaScript because they are used in callbacks, React, Express, async code, closures, and functional programming.