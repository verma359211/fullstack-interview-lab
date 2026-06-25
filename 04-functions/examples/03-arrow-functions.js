const add = (a, b) => {
	return a + b;
};

const shortAdd = (a, b) => a + b;

const square = (x) => x * x;

const greet = () => console.log("Hello");

console.log(add(2, 3));
console.log(shortAdd(5, 5));
console.log(square(4));
greet();

console.log("\nArrow function as object method trap:");

const userWrong = {
	name: "Chandan",
	greet: () => {
		console.log(this.name);
	},
};

userWrong.greet();

console.log("\nNormal method:");

const userCorrect = {
	name: "Chandan",
	greet() {
		console.log(this.name);
	},
};

userCorrect.greet();

/*
Expected Output:

5
10
16
Hello

Arrow function as object method trap:
undefined

Normal method:
Chandan

Note:
In Node.js, the arrow function this behavior may depend on module context.
Main point: arrow functions do not have their own this.
*/
