# Interview Questions: Data Types and Equality

## Easy Questions

1. What are primitive data types in JavaScript?

2. What are reference data types in JavaScript?

3. What is the difference between primitive and reference types?

4. What is the output of `typeof null`?

5. What is the output of `typeof []`?

6. How do you correctly check if a value is an array?

7. What is the difference between `null` and `undefined`?

8. What is `NaN`?

9. What is the type of `NaN`?

10. What are truthy and falsy values?

11. Is an empty array truthy or falsy?

12. Is an empty object truthy or falsy?

13. What is BigInt?

14. What is Symbol?

15. Are strings mutable or immutable?

---

## Medium Questions

16. Why does `"5" + 1` return `"51"`?

17. Why does `"5" - 1` return `4`?

18. What is type coercion?

19. What is the difference between `==` and `===`?

20. Why is `NaN === NaN` false?

21. Difference between `isNaN()` and `Number.isNaN()`?

22. What does `instanceof` check?

23. Why is `{ } === { }` false?

24. Why is `[ ] === [ ]` false?

25. What is `Object.is()`?

26. How is `Object.is()` different from `===`?

27. Why should we avoid `new Boolean(false)`?

28. Why does `JSON.stringify()` remove `undefined` fields?

29. Why do default parameters work for `undefined` but not `null`?

30. Why can BigInt and Number not be mixed directly?

---

## Advanced Questions

31. Why is `typeof null` equal to `"object"`?

32. Why should we avoid `new String()`, `new Number()`, and `new Boolean()`?

33. How are arrays objects in JavaScript?

34. Why are functions called first-class citizens?

35. What is the difference between `Symbol("id")` and another `Symbol("id")`?

36. When should BigInt be used?

37. What happens during object comparison?

38. What are the limitations of `typeof`?

39. What are the limitations of `instanceof`?

40. Explain step-by-step why `[] == false` is true.

41. Explain step-by-step why `[] == ![]` is true.

42. In which case can `value == null` be acceptable?

43. Why is `typeof undeclaredVariable` safe but `typeof variableInTDZ` not safe?

44. How does reference equality affect React re-renders?

45. How does `null` vs `undefined` affect API update payloads?