console.log("Higher-order function accepting a function:");

function operate(a, b, operation) {
	return operation(a, b);
}

const sum = operate(5, 3, function (x, y) {
	return x + y;
});

console.log(sum);

console.log("\nHigher-order function returning a function:");

function multiplier(factor) {
	return function (number) {
		return number * factor;
	};
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));
console.log(triple(5));

console.log("\nArray methods are higher-order functions:");

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

/*
Expected Output:

Higher-order function accepting a function:
8

Higher-order function returning a function:
10
15

Array methods are higher-order functions:
[ 2, 4 ]
*/
