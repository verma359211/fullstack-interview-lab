# Interview Answers: Functions

## 1. What is a function in JavaScript?

A function is a reusable block of code.

In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, returned from other functions, and stored in objects or arrays.

---

## 2. What is a function declaration?

A function declaration defines a named function using the `function` keyword.

```js
function add(a, b) {
  return a + b;
}
```

Function declarations are fully hoisted.

---

## 3. What is a function expression?

A function expression assigns a function to a variable.

```js
const add = function (a, b) {
  return a + b;
};
```

Function expressions follow variable hoisting rules.

---

## 4. Function declaration vs function expression

Function declarations are fully hoisted.

Function expressions are not hoisted in the same way. They follow the hoisting behavior of the variable they are assigned to.

```js
sayHi();

function sayHi() {
  console.log("Hi");
}
```

Works.

```js
sayHi();

const sayHi = function () {};
```

Throws ReferenceError.

---

## 5. What is an arrow function?

An arrow function is a shorter function syntax introduced in ES6.

```js
const add = (a, b) => a + b;
```

Arrow functions do not have their own `this`, `arguments`, or constructor behavior.

---

## 6. Difference between arrow functions and normal functions

Main differences:

```text
Normal functions have their own this.
Arrow functions do not have their own this.

Normal functions have arguments object.
Arrow functions do not have their own arguments.

Normal functions can be used as constructors.
Arrow functions cannot be used as constructors.

Function declarations are hoisted.
Arrow function expressions follow variable hoisting rules.
```

---

## 7. What is a callback function?

A callback is a function passed into another function to be executed later.

```js
function execute(callback) {
  callback();
}

execute(function () {
  console.log("Callback executed");
});
```

Callbacks are used in event handlers, array methods, timers, async code, React, and Express.

---

## 8. What is a higher-order function?

A higher-order function is a function that accepts another function as an argument or returns another function.

```js
function operate(a, b, operation) {
  return operation(a, b);
}
```

Array methods like `map`, `filter`, and `reduce` are higher-order functions.

---

## 9. What is a pure function?

A pure function returns the same output for the same input and does not cause side effects.

```js
function add(a, b) {
  return a + b;
}
```

Pure functions are easier to test and debug.

---

## 10. What is a side effect?

A side effect is anything a function does outside returning a value.

Examples:

```text
modifying global state
mutating input objects
API calls
database writes
DOM changes
console.log
localStorage changes
```

---

## 11. What is an IIFE?

IIFE means Immediately Invoked Function Expression.

```js
(function () {
  console.log("Runs immediately");
})();
```

It runs immediately after being created.

It was historically used to create private scope and avoid polluting the global scope.

---

## 12. Parameters vs arguments

Parameters are variables in the function definition.

Arguments are actual values passed during function call.

```js
function greet(name) {
  console.log(name);
}

greet("Chandan");
```

`name` is the parameter.

`"Chandan"` is the argument.

---

## 13. What are default parameters?

Default parameters provide fallback values when an argument is `undefined`.

```js
function greet(name = "Guest") {
  console.log(name);
}
```

Default values apply only for `undefined`, not for `null`.

---

## 14. What are rest parameters?

Rest parameters collect multiple arguments into a real array.

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
```

The rest parameter must be the last parameter.

---

## 15. What is the arguments object?

`arguments` is an array-like object available inside normal functions.

It contains all arguments passed to the function.

```js
function test() {
  console.log(arguments);
}
```

Arrow functions do not have their own `arguments`.

Modern JavaScript prefers rest parameters.

---

## 16. What is a closure?

A closure is created when a function remembers variables from its outer lexical scope even after the outer function has finished executing.

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}
```

The returned inner function remembers `count`.

---

## 17. Why are closures useful?

Closures are useful for:

```text
private variables
function factories
debounce
throttle
memoization
once functions
currying
React hooks
module patterns
```

---

## 18. Explain the var loop closure problem

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

`var` is function-scoped. All callbacks share the same variable `i`.

By the time callbacks run, the loop has completed and `i` is `4`.

---

## 19. Why does let fix the loop closure problem?

`let` is block-scoped.

In a loop, `let` creates a new binding for each iteration.

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

---

## 20. What is currying?

Currying transforms a function with multiple arguments into nested functions that take one argument at a time.

```js
const add = a => b => c => a + b + c;

add(1)(2)(3);
```

Currying is useful for creating reusable partially configured functions.

---

## 21. What is function composition?

Function composition means combining small functions to build a larger function.

```js
const double = x => x * 2;
const square = x => x * x;

square(double(3));
```

Composition is useful for data transformation, validation pipelines, and functional programming.

---

## 22. Difference between call, apply, and bind

`call` invokes a function immediately and passes arguments one by one.

```js
fn.call(thisValue, arg1, arg2);
```

`apply` invokes a function immediately and passes arguments as an array.

```js
fn.apply(thisValue, [arg1, arg2]);
```

`bind` returns a new function with fixed `this`.

```js
const boundFn = fn.bind(thisValue);
```

---

## 23. What is method borrowing?

Method borrowing means using a method from one object on another object using `call`, `apply`, or `bind`.

```js
person1.introduce.call(person2);
```

Here, `person2` borrows `person1`'s method.

---

## 24. Why are functions objects?

Functions are callable objects.

They can be invoked and can also have properties.

```js
function greet() {}

greet.language = "English";

console.log(greet.language);
```

---

## 25. Final Summary

Functions are one of the most important concepts in JavaScript.

They can be stored, passed, returned, and composed.

They create scope.

They can remember scope through closures.

They power callbacks, higher-order functions, React event handlers, Express middleware, async JavaScript, and functional programming patterns.