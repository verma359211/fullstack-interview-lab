{
	var x = 10;
	let y = 20;
	const z = 30;

	console.log("Inside block:");
	console.log(x);
	console.log(y);
	console.log(z);
}

console.log("\nOutside block:");
console.log(x);

try {
	console.log(y);
} catch (err) {
	console.log(err.message);
}

try {
	console.log(z);
} catch (err) {
	console.log(err.message);
}
