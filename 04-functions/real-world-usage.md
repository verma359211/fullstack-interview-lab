# Real-World Usage: Functions

## 1. React Event Handlers

React uses functions as event handlers.

```jsx
function Button() {
  function handleClick() {
    console.log("Clicked");
  }

  return <button onClick={handleClick}>Click</button>;
}
```

`handleClick` is a callback passed to React.

---

## 2. React Props as Callback Functions

Parent components often pass functions to child components.

```jsx
function Parent() {
  function handleSave(data) {
    console.log(data);
  }

  return <Child onSave={handleSave} />;
}

function Child({ onSave }) {
  return <button onClick={() => onSave("data")}>Save</button>;
}
```

This is child-to-parent communication.

---

## 3. Express Route Handlers

Express route handlers are callback functions.

```js
app.get("/users", function (req, res) {
  res.send("Users");
});
```

Express calls the function when the route is requested.

---

## 4. Express Middleware

Middleware functions receive `req`, `res`, and `next`.

```js
function authMiddleware(req, res, next) {
  if (!req.user) {
    return res.status(401).send("Unauthorized");
  }

  next();
}
```

Middleware is a practical example of callbacks and higher-order flow.

---

## 5. Array Data Transformation

Array methods use callbacks.

```js
const activeUsers = users.filter(user => user.isActive);

const userNames = users.map(user => user.name);
```

`filter` and `map` are higher-order functions.

---

## 6. Validation Utilities

Pure functions are useful for validation.

```js
function isValidEmail(email) {
  return email.includes("@");
}
```

Same input gives same output.

No external state is changed.

---

## 7. React Reducers

Reducers should be pure functions.

```js
function reducer(state, action) {
  if (action.type === "increment") {
    return {
      count: state.count + 1,
    };
  }

  return state;
}
```

Reducers should not mutate state directly.

---

## 8. Closures for Private Variables

Closures can create private state.

```js
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    getValue() {
      return count;
    },
  };
}
```

`count` is not directly accessible from outside.

---

## 9. Debounce Uses Closure

Debounce uses closure to remember the timer ID.

```js
function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
```

This is useful for search inputs.

---

## 10. Currying for Configured Functions

Currying can create reusable configured functions.

```js
const createLogger = level => message => {
  console.log(`[${level}] ${message}`);
};

const errorLogger = createLogger("ERROR");

errorLogger("Something failed");
```

---

## 11. Function Composition for Data Formatting

Small functions can be composed to build a pipeline.

```js
const trim = str => str.trim();
const lowercase = str => str.toLowerCase();
const removeSpaces = str => str.replaceAll(" ", "-");

const slugify = str => removeSpaces(lowercase(trim(str)));
```

Useful for formatting, validation, and transformations.

---

## 12. bind in Class Components

Older React class components often used `bind`.

```js
class Button extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
  }
}
```

`bind` preserves the correct `this`.

---

## 13. Method Borrowing

`call` allows one object to use another object's method.

```js
const person1 = {
  name: "Chandan",
  introduce() {
    console.log(this.name);
  },
};

const person2 = {
  name: "Amit",
};

person1.introduce.call(person2);
```

Output:

```text
Amit
```

---

## 14. Node.js Callbacks

Older Node.js APIs commonly use callbacks.

```js
fs.readFile("file.txt", function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
```

This pattern is called error-first callback.

---

## 15. Practical Rule Summary

Use function declarations for normal reusable functions.

Use function expressions or arrow functions when passing functions around.

Use arrow functions for short callbacks.

Avoid arrow functions as object methods when `this` is needed.

Prefer rest parameters over `arguments`.

Keep utility functions pure when possible.

Use closures carefully for private state and function factories.

Use `call`, `apply`, and `bind` when you need to control `this`.