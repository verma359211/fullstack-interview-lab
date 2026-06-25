function greetUser(name, callback) {
	console.log("Hello " + name);
	callback();
}

greetUser("Chandan", function () {
	console.log("Callback executed");
});

console.log("\nCallback with array method:");

const numbers = [1, 2, 3];

const doubled = numbers.map(function (num) {
	return num * 2;
});

console.log(doubled);

console.log("\nCallback with setTimeout:");

setTimeout(function () {
	console.log("Runs later");
}, 1000);

/*
Expected Output:

Hello Chandan
Callback executed

Callback with array method:
[ 2, 4, 6 ]

Callback with setTimeout:
Runs later
*/
