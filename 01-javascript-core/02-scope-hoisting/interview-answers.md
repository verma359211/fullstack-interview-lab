# Interview Answers

## What is Hoisting?

Hoisting is JavaScript's behavior of allocating memory for declarations during the creation phase before code execution begins.

---

## Is JavaScript Moving Code?

No.

JavaScript only allocates memory before execution.

The code itself is not physically moved.

---

## What is TDZ?

Temporal Dead Zone is the period between entering a scope and reaching the declaration of a let or const variable.

Accessing the variable during this period throws a ReferenceError.

---

## Is let Hoisted?

Yes.

let is hoisted but remains uninitialized until its declaration is executed.

---

## Is const Hoisted?

Yes.

const is hoisted and remains in the Temporal Dead Zone until initialization.

---

## Why Does var Print Undefined?

Because memory is allocated with the value undefined during the creation phase.

---

## What is Lexical Scope?

Lexical scope means scope is determined by where functions are written in the source code.

---

## What is Scope Chain?

The scope chain is the process JavaScript uses to search for variables from inner scopes to outer scopes.

---

## What is the Call Stack?

The call stack is a LIFO data structure used by JavaScript to keep track of function execution.