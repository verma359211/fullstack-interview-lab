console.log("Calling function before declaration:");

console.log(add(2, 3));

function add(a, b) {
	return a + b;
}

console.log("Calling function after declaration:");

console.log(add(10, 20));

/*
Expected Output:

Calling function before declaration:
5
Calling function after declaration:
30
*/
