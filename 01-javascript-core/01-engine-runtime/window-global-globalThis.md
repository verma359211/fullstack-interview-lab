This is a great question because most tutorials stop at:

> window = browser
>
> global = node
>
> globalThis = universal

But interviewers often ask:

> "Okay, but why do these exist? When would you actually use them?"

Let's understand from the beginning.

---

# Why Do We Need a Global Object?

Imagine this code:

```js
const name = "Chandan";

function greet() {
  console.log("Hello");
}
```

Where are `name` and `greet` stored?

They need to live somewhere that is accessible throughout the application.

Every JavaScript runtime creates a special object called the **Global Object**.

Think of it as:

```text
Global Object
│
├── built-in functions
├── built-in objects
├── runtime APIs
└── global variables
```

---

# Browser Global Object = window

In browsers, the global object is:

```js
window
```

Example:

```js
var name = "Chandan";

console.log(window.name);
```

Output:

```text
Chandan
```

Why?

Because in browsers:

```js
var name = "Chandan";
```

becomes:

```js
window.name = "Chandan";
```

---

# Browser APIs Live on window

Consider:

```js
setTimeout(() => {}, 1000);
```

Where does `setTimeout` come from?

Not JavaScript.

It comes from the browser.

Actually:

```js
window.setTimeout(() => {}, 1000);
```

and

```js
setTimeout(() => {}, 1000);
```

are effectively the same.

---

Similarly:

```js
alert("Hello");
```

is actually:

```js
window.alert("Hello");
```

---

And:

```js
document.getElementById("btn");
```

is:

```js
window.document.getElementById("btn");
```

because `document` is a property of `window`.

---

# Real Browser Example

Open DevTools and run:

```js
console.log(window);
```

You'll see:

```text
window
├── document
├── localStorage
├── fetch
├── setTimeout
├── location
├── history
├── navigator
└── ...
```

The browser puts everything under `window`.

---

# Why Developers Rarely Write window?

Because it's automatically searched.

These are equivalent:

```js
window.alert("Hello");
```

```js
alert("Hello");
```

---

# When Do We Actually Use window?

### Example 1: Current URL

```js
console.log(window.location.href);
```

Output:

```text
https://google.com
```

Used in:

* React apps
* Routing
* Redirects

---

### Example 2: Open New Tab

```js
window.open("https://github.com");
```

---

### Example 3: Local Storage

```js
window.localStorage.setItem("token", "123");
```

---

### Example 4: Scroll

```js
window.scrollTo(0, 0);
```

Common in React route changes.

---

# Node Global Object = global

Node doesn't have:

```js
window
```

because there is:

* no browser
* no DOM
* no tabs
* no document

Instead Node provides:

```js
global
```

---

Example:

```js
console.log(global);
```

You'll see:

```text
global
├── process
├── Buffer
├── setTimeout
├── clearTimeout
├── setInterval
└── ...
```

---

# Real Usage of global

### Example 1: Configuration

```js
global.appName = "Interview Lab";

console.log(global.appName);
```

Works.

Though generally not recommended.

---

### Example 2: Access Process

```js
console.log(process.env.NODE_ENV);
```

Technically:

```js
console.log(global.process.env.NODE_ENV);
```

because process is on global.

---

### Example 3: Buffer

```js
const data = Buffer.from("hello");
```

Actually:

```js
const data = global.Buffer.from("hello");
```

---

# Why Not Use global Everywhere?

Because:

```js
global.user = "Chandan";
```

creates hidden dependencies.

Large applications become difficult to debug.

Interviewers like hearing:

> "It's possible, but generally avoided because it pollutes global scope."

---

# The Problem Before globalThis

Suppose you're writing a library.

You want to access the global object.

Browser:

```js
window
```

Node:

```js
global
```

Web Worker:

```js
self
```

Now your code becomes:

```js
if (typeof window !== "undefined") {
}
else if (typeof global !== "undefined") {
}
else if (typeof self !== "undefined") {
}
```

Messy.

---

# Enter globalThis

ECMAScript introduced:

```js
globalThis
```

One name.

Everywhere.

---

Browser:

```js
globalThis === window
```

Output:

```text
true
```

---

Node:

```js
globalThis === global
```

Output:

```text
true
```

---

Web Worker:

```js
globalThis === self
```

Output:

```text
true
```

---

# Why Library Authors Use globalThis

Imagine you're building a package.

Bad:

```js
window.myLibrary = {};
```

Fails in Node.

---

Good:

```js
globalThis.myLibrary = {};
```

Works everywhere.

---

# Interview Question

### What is the difference between window and global?

Answer:

| window                | global                |
| --------------------- | --------------------- |
| Browser global object | Node.js global object |
| Has DOM APIs          | Has Node APIs         |
| Has document          | No document           |
| Has localStorage      | No localStorage       |
| Has location          | No location           |

---

# Interview Question

### What is globalThis?

Answer:

> globalThis is the standard global object reference introduced by ECMAScript. It provides a consistent way to access the global object across browsers, Node.js, and other JavaScript environments.

---

# Important Interview Trap

Many people think:

```js
var name = "Chandan";

console.log(window.name);
```

will always work.

Not necessarily.

In modern JavaScript:

```js
let name = "Chandan";
const age = 25;
```

do **not** become properties of `window`.

Only old-style `var` declarations at the global scope attach to `window`.

Example:

```js
var a = 10;
let b = 20;

console.log(window.a); // 10
console.log(window.b); // undefined
```

This is a favorite interview question.

---

# Repo Exercise (Add This)

Create:

```js
// examples/global-object-traps.js

var a = 10;
let b = 20;
const c = 30;

console.log(window.a);
console.log(window.b);
console.log(window.c);
```

Expected Output:

```text
10
undefined
undefined
```

And write in your notes:

> `var` creates a property on the browser global object (`window`) when declared in global scope. `let` and `const` do not.

This small question has appeared in JavaScript interviews for years and directly leads into our next topic: **Execution Context, Scope, Hoisting, and the Temporal Dead Zone**, where you'll finally understand *why* this happens.
