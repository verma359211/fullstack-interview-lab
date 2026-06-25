console.log("Anonymous function expression:");

const greet = function () {
	console.log("Hello from anonymous function");
};

greet();

console.log("\nNamed function declaration:");

function sayHi() {
	console.log("Hello from named function");
}

sayHi();

console.log("\nNamed function expression useful for recursion:");

const factorial = function fact(n) {
	if (n <= 1) return 1;

	return n * fact(n - 1);
};

console.log(factorial(5));

/*
Expected Output:

Anonymous function expression:
Hello from anonymous function

Named function declaration:
Hello from named function

Named function expression useful for recursion:
120
*/
