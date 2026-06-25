console.log("Normal IIFE:");

(function () {
	console.log("IIFE running");
})();

console.log("\nIIFE creates private scope:");

(function () {
	var secret = "hidden";
	console.log(secret);
})();

try {
	console.log(secret);
} catch (err) {
	console.log(err.name + ": " + err.message);
}

console.log("\nArrow IIFE:");

(() => {
	console.log("Arrow IIFE running");
})();

/*
Expected Output:

Normal IIFE:
IIFE running

IIFE creates private scope:
hidden
ReferenceError: secret is not defined

Arrow IIFE:
Arrow IIFE running
*/
