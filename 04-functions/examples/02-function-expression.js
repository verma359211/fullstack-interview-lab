console.log("Function expression with var:");

try {
	console.log(addWithVar(2, 3));
} catch (err) {
	console.log(err.name + ": " + err.message);
}

var addWithVar = function (a, b) {
	return a + b;
};

console.log(addWithVar(2, 3));

console.log("\nFunction expression with const:");

try {
	console.log(addWithConst(2, 3));
} catch (err) {
	console.log(err.name + ": " + err.message);
}

const addWithConst = function (a, b) {
	return a + b;
};

console.log(addWithConst(2, 3));

/*
Expected Output:

Function expression with var:
TypeError: addWithVar is not a function
5

Function expression with const:
ReferenceError: Cannot access 'addWithConst' before initialization
5
*/
