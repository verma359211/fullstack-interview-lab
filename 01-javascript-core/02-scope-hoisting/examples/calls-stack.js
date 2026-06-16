function one() {
	console.log("Entering one");
	two();
	console.log("Exiting one");
}

function two() {
	console.log("Entering two");
	three();
	console.log("Exiting two");
}

function three() {
	console.log("Inside three");
}

one();
