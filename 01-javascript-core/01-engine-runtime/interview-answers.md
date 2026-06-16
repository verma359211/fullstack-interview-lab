# Interview Answers

## What is a JavaScript Engine?

A JavaScript engine is software that parses, compiles and executes JavaScript code.

Examples include V8, SpiderMonkey and JavaScriptCore.

---

## What is V8?

V8 is Google's JavaScript engine used by Chrome and Node.js.

It uses JIT compilation to convert JavaScript into optimized machine code.

---

## What is Node.js?

Node.js is a JavaScript runtime environment built on top of the V8 engine.

It provides APIs for filesystem, networking and operating system interactions.

---

## Browser vs Node.js

The JavaScript language is the same.

The runtime APIs are different.

Browser provides DOM APIs.

Node.js provides server-side APIs.

---

## Is JavaScript Interpreted or Compiled?

Modern JavaScript is both interpreted and compiled.

Engines such as V8 use Just In Time compilation.

---

## Why is JavaScript called single threaded?

Because JavaScript executes code on a single call stack.

Only one JavaScript instruction executes at a time.

---

## What is strict mode?

Strict mode enables stricter parsing and error handling in JavaScript.

It helps prevent common mistakes and unsafe behavior.

---

## What is globalThis?

globalThis is the standard global object reference that works across all JavaScript environments.