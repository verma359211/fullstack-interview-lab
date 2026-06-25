console.log("Normal function:");

function addNormal(a, b, c) {
	return a + b + c;
}

console.log(addNormal(1, 2, 3));

console.log("\nCurried function:");

function add(a) {
	return function (b) {
		return function (c) {
			return a + b + c;
		};
	};
}

console.log(add(1)(2)(3));

console.log("\nArrow curried function:");

const multiply = (a) => (b) => a * b;

const double = multiply(2);
const triple = multiply(3);

console.log(double(5));
console.log(triple(5));

console.log("\nReal-world logger example:");

const createLogger = (level) => (message) => {
	console.log(`[${level}] ${message}`);
};

const errorLogger = createLogger("ERROR");
const infoLogger = createLogger("INFO");

errorLogger("Something failed");
infoLogger("Server started");

/*
Expected Output:

Normal function:
6

Curried function:
6

Arrow curried function:
10
15

Real-world logger example:
[ERROR] Something failed
[INFO] Server started
*/
