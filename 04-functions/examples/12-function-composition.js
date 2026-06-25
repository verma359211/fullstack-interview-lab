const double = (x) => x * 2;
const square = (x) => x * x;

console.log("Manual composition:");

console.log(square(double(3)));

console.log("\nBasic compose function:");

const compose = (f, g) => (value) => f(g(value));

const squareAfterDouble = compose(square, double);

console.log(squareAfterDouble(3));

console.log("\nPractical string transformation:");

const trim = (str) => str.trim();
const lowercase = (str) => str.toLowerCase();
const removeSpaces = (str) => str.replaceAll(" ", "-");

const slugify = (str) => removeSpaces(lowercase(trim(str)));

console.log(slugify("  Hello World From JavaScript  "));

console.log("\nReusable composeRight:");

const composeRight =
	(...functions) =>
	(value) =>
		functions.reduceRight((acc, fn) => fn(acc), value);

const slugifyWithCompose = composeRight(removeSpaces, lowercase, trim);

console.log(slugifyWithCompose("  Interview Preparation Repo  "));

/*
Expected Output:

Manual composition:
36

Basic compose function:
36

Practical string transformation:
hello-world-from-javascript

Reusable composeRight:
interview-preparation-repo
*/
