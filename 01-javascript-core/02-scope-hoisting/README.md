# Variables, Scope, Hoisting, TDZ, Execution Context and Call Stack

## Topics Covered

- var
- let
- const
- Global Scope
- Function Scope
- Block Scope
- Lexical Scope
- Scope Chain
- Hoisting
- Temporal Dead Zone (TDZ)
- Re-declaration vs Re-assignment
- Execution Context
- Creation Phase
- Execution Phase
- Call Stack

---

# Execution Context

Before JavaScript executes code, it creates an Execution Context.

An Execution Context contains:

1. Memory Component
2. Thread of Execution

Example:

```js
var a = 10;

function greet() {
  console.log("Hello");
}
```

During creation phase:

Memory:

a → undefined

greet → complete function definition

During execution phase:

a becomes 10

function executes when called

---

# Creation Phase

The creation phase happens before any line executes.

JavaScript scans the code and allocates memory.

Example:

```js
console.log(a);

var a = 10;
```

Creation Phase:

a → undefined

Execution Phase:

console.log(a) → undefined

a = 10

---

# Hoisting

Hoisting is the behavior where variable and function declarations are allocated memory before execution starts.

Important:

JavaScript does NOT move code.

Only memory allocation happens.

---

# var

Characteristics:

- Function Scoped
- Hoisted
- Can be redeclared
- Can be reassigned
- Creates property on window in browser global scope

Example:

```js
var a = 10;
var a = 20;

console.log(a);
```

Output:

20

---

# let

Characteristics:

- Block Scoped
- Hoisted
- Cannot redeclare
- Can reassign
- Subject to TDZ

Example:

```js
let a = 10;

a = 20;
```

Output:

20

---

# const

Characteristics:

- Block Scoped
- Hoisted
- Cannot redeclare
- Cannot reassign
- Must initialize immediately

Example:

```js
const a = 10;

a = 20;
```

Output:

TypeError

---

# Global Scope

Variables declared outside all functions and blocks belong to the global scope.

```js
let name = "Chandan";

function test() {
  console.log(name);
}
```

Output:

Chandan

---

# Function Scope

Variables declared with var inside a function are accessible only inside that function.

```js
function test() {
  var a = 10;
}

console.log(a);
```

Output:

ReferenceError

---

# Block Scope

A block is defined using {}.

let and const respect block scope.

```js
{
  let a = 10;
}

console.log(a);
```

Output:

ReferenceError

---

# Lexical Scope

JavaScript determines scope based on where functions are written, not where they are called.

```js
let a = 10;

function outer() {
  function inner() {
    console.log(a);
  }

  inner();
}

outer();
```

Output:

10

---

# Scope Chain

When a variable is not found in the current scope, JavaScript searches outward.

Example:

Inner Scope
    ↓
Outer Scope
    ↓
Global Scope

This search path is called the Scope Chain.

---

# Temporal Dead Zone (TDZ)

let and const are hoisted but remain uninitialized until their declaration is reached.

Example:

```js
console.log(a);

let a = 10;
```

Output:

ReferenceError

Reason:

a exists in memory but is in the Temporal Dead Zone.

---

# Re-declaration vs Re-assignment

Re-declaration:

```js
let a = 10;
let a = 20;
```

Error

Re-assignment:

```js
let a = 10;

a = 20;
```

Allowed

---

# Call Stack

JavaScript executes code using a single call stack.

Example:

```js
function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Done");
}

one();
```

Stack:

Global
↓
one()
↓
two()
↓
three()

Then removed in reverse order.

This is called LIFO (Last In First Out).

---

# Quick Revision Table

| Feature | var | let | const |
|----------|----------|----------|----------|
| Scope | Function | Block | Block |
| Hoisted | Yes | Yes | Yes |
| TDZ | No | Yes | Yes |
| Redeclare | Yes | No | No |
| Reassign | Yes | Yes | No |
| Global Object Property | Yes | No | No |