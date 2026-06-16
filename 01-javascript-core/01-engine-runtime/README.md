# JavaScript Engine, Runtime Environment and Fundamentals

## Topics Covered

- JavaScript Engine
- V8 Engine
- Runtime Environment
- Browser vs Node.js
- JIT Compilation
- Single Threaded Nature
- Synchronous vs Asynchronous Execution
- Strict Mode
- Global Objects

---

## What is a JavaScript Engine?

A JavaScript engine is software that reads, parses, compiles and executes JavaScript code.

Example engines:

- V8 (Chrome, Node.js)
- SpiderMonkey (Firefox)
- JavaScriptCore (Safari)

---

## What is V8?

V8 is Google's JavaScript Engine.

It powers:

- Chrome
- Node.js

V8 converts JavaScript into machine code and executes it.

---

## What is a Runtime Environment?

A runtime environment provides additional features around the JavaScript engine.

### Browser Runtime

Provides:

- DOM
- window
- localStorage
- fetch
- Web APIs

### Node.js Runtime

Provides:

- fs
- path
- http
- process
- Buffer

The JavaScript language is the same in both environments.

The available APIs are different.

---

## Browser vs Node.js

Browser:

```js
console.log(window);
console.log(document);
```

Node:

console.log(global);
console.log(process);

Browser has DOM APIs.

Node does not.

Is JavaScript Interpreted or Compiled?

Modern JavaScript is both.

It uses JIT (Just In Time) compilation.

Simplified flow:

JavaScript
    ↓
Parser
    ↓
AST
    ↓
Interpreter
    ↓
Profiler
    ↓
Optimizing Compiler
    ↓
Machine Code
Single Threaded Nature

JavaScript executes code using a single call stack.

Only one piece of JavaScript code executes at a time.

Example:

console.log("A");
console.log("B");
console.log("C");

Output:

A
B
C
Synchronous Execution

Code executes line by line.

console.log("A");
console.log("B");

Output:

A
B
Asynchronous Execution
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

Output:

A
C
B
Strict Mode

Enable:

"use strict";

Benefits:

Prevents accidental globals
Catches common mistakes
Makes code safer
Helps engine optimization
Global Objects
Browser
window
Node.js
global
Universal
globalThis

Works in every JavaScript environment.