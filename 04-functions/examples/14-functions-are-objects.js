function greet() {
	console.log("Hello");
}

greet.language = "English";
greet.type = "Greeting Function";

console.log(typeof greet);
console.log(greet.language);
console.log(greet.type);

console.log("\nFunctions can be stored in objects:");

const actions = {
	sayHi: function () {
		console.log("Hi");
	},
	sayBye: function () {
		console.log("Bye");
	},
};

actions.sayHi();
actions.sayBye();

console.log("\nFunctions can be stored in arrays:");

const tasks = [
	function () {
		console.log("Task 1");
	},
	function () {
		console.log("Task 2");
	},
];

tasks.forEach((task) => task());

/*
Expected Output:

function
English
Greeting Function

Functions can be stored in objects:
Hi
Bye

Functions can be stored in arrays:
Task 1
Task 2
*/
