# Real-World Usage: Data Types and Equality

## 1. Form Validation

User input usually comes as a string.

```js
const ageInput = "25";

const age = Number(ageInput);

if (Number.isNaN(age)) {
  console.log("Invalid age");
}
```

Use `Number.isNaN()` after converting input to number.

---

## 2. API Responses

APIs often use `null` to represent missing data.

```js
const user = {
  id: 1,
  name: "Chandan",
  profileImage: null,
};

if (user.profileImage === null) {
  console.log("Show default image");
}
```

`null` means the field exists but has no value.

---

## 3. Missing Object Properties

Missing object properties return `undefined`.

```js
const user = {
  name: "Chandan",
};

console.log(user.age); // undefined
```

This usually means the property does not exist.

---

## 4. React Conditional Rendering

Empty arrays are truthy.

Bad:

```jsx
if (items) {
  return <ProductList items={items} />;
}
```

If `items = []`, this still runs.

Better:

```jsx
if (items.length > 0) {
  return <ProductList items={items} />;
}
```

---

## 5. React State and Reference Equality

Objects and arrays are compared by reference.

```js
const oldFilters = { status: "active" };
const newFilters = { status: "active" };

console.log(oldFilters === newFilters); // false
```

Even though the contents are same, the references are different.

This affects:

```text
useEffect dependency arrays
React.memo
useMemo
useCallback
Redux state updates
component re-renders
```

---

## 6. Immutable Updates in React

Bad:

```js
items.push(newItem);
setItems(items);
```

This mutates the same array reference.

Better:

```js
setItems([...items, newItem]);
```

This creates a new array reference.

React can detect the change more reliably.

---

## 7. Backend Validation

Validate both type and invalid number cases.

```js
function validatePrice(price) {
  if (typeof price !== "number" || Number.isNaN(price)) {
    throw new Error("Invalid price");
  }
}
```

`typeof NaN` is `"number"`, so checking only `typeof price === "number"` is not enough.

---

## 8. API Update Payloads

`undefined` and `null` can mean different things.

```js
const payload1 = {
  discount: undefined,
};

const payload2 = {
  discount: null,
};
```

`undefined` may mean:

```text
do not update this field
```

`null` may mean:

```text
clear this field
```

This is important in PATCH APIs.

---

## 9. JSON.stringify Behavior

```js
const payload = {
  name: "Chandan",
  age: undefined,
  profileImage: null,
};

console.log(JSON.stringify(payload));
```

Output:

```json
{"name":"Chandan","profileImage":null}
```

`undefined` fields are removed.

`null` fields are preserved.

---

## 10. Authentication Token Checks

Bad:

```js
if (token) {
  // token exists
}
```

Better:

```js
if (typeof token === "string" && token.length > 0) {
  // token is valid shape
}
```

This prevents unexpected values like objects, arrays, or booleans from passing validation.

---

## 11. Money Calculations

Avoid floating-point surprises.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Better approach:

```js
const priceInPaise = 1000; // ₹10.00
const taxInPaise = 180;    // ₹1.80

const totalInPaise = priceInPaise + taxInPaise;

console.log(totalInPaise); // 1180
```

Use integer units for money calculations.

---

## 12. Large IDs

Very large numeric IDs may lose precision if stored as Number.

Better to store them as strings or BigInt depending on use case.

```js
const id = "900719925474099312345";
```

Many APIs send large IDs as strings to avoid precision loss.

---

## 13. Safe Array Check

Do not use:

```js
typeof value === "array"
```

This is wrong.

Use:

```js
Array.isArray(value)
```

Example:

```js
if (Array.isArray(products)) {
  console.log("products is an array");
}
```

---

## 14. Safe Function Check

Before calling a callback:

```js
if (typeof callback === "function") {
  callback();
}
```

This avoids runtime errors.

---

## 15. Practical Rule Summary

Use `===` by default.

Use `Number.isNaN()` instead of `isNaN()`.

Use `Array.isArray()` for arrays.

Use `value === null` for null checks.

Use `typeof value === "undefined"` or `value === undefined` for undefined checks.

Use `items.length > 0` for checking non-empty arrays.

Remember that objects and arrays are compared by reference.

Use integer units for money calculations.

Use `null` intentionally and treat `undefined` as missing or not assigned.