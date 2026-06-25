console.log("Default parameters:");

function greet(name = "Guest") {
	console.log("Hello " + name);
}

greet("Chandan");
greet();
greet(undefined);
greet(null);
greet("");

console.log("\nRest parameters:");

function sum(...numbers) {
	return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));

console.log("\nRest parameter with fixed first argument:");

function logMessages(level, ...messages) {
	console.log("Level:", level);
	console.log("Messages:", messages);
}

logMessages("error", "Invalid token", "User not found");

console.log("\narguments object:");

function showArguments() {
	console.log(arguments);
	console.log(arguments[0]);
	console.log(arguments.length);

	const args = Array.from(arguments);
	console.log(args.map((x) => x * 2));
}

showArguments(1, 2, 3);

console.log("\nArrow functions do not have their own arguments:");

function outer() {
	const arrow = () => {
		console.log(arguments);
	};

	arrow("a", "b");
}

outer(10, 20, 30);

/*
Expected Output includes:

Default parameters:
Hello Chandan
Hello Guest
Hello Guest
Hello null
Hello 

Rest parameters:
10

Rest parameter with fixed first argument:
Level: error
Messages: [ 'Invalid token', 'User not found' ]

arguments object:
[Arguments] { '0': 1, '1': 2, '2': 3 }
1
3
[ 2, 4, 6 ]

Arrow functions do not have their own arguments:
[Arguments] { '0': 10, '1': 20, '2': 30 }
*/
