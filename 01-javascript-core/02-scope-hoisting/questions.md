# Interview Questions

## Easy

1. Difference between var, let and const?

2. What is hoisting?

3. What is block scope?

4. What is function scope?

5. What is lexical scope?

6. What is the scope chain?

7. What is TDZ?

8. What is re-declaration?

9. What is re-assignment?

10. What is the call stack?

---

## Medium

11. Why does var print undefined before declaration?

12. Why does let throw an error before declaration?

13. Is let hoisted?

14. Is const hoisted?

15. Why can function declarations be called before definition?

16. Why do function expressions fail before initialization?

17. How does JavaScript resolve variables?

18. Explain creation phase and execution phase.

---

## Output Based

Q1

console.log(a);
var a = 10;

Q2

console.log(a);
let a = 10;

Q3

sayHi();

function sayHi() {
  console.log("Hi");
}

Q4

sayHi();

var sayHi = function() {
  console.log("Hi");
};

Q5

{
  var a = 10;
}

console.log(a);

Q6

{
  let a = 10;
}

console.log(a);