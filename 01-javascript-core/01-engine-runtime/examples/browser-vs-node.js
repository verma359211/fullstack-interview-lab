/*
This file demonstrates that JavaScript is the same,
but the runtime environment is different.
*/

console.log("JavaScript is running.");

try {
	console.log(window);
} catch {
	console.log("window is not available");
}

try {
	console.log(document);
} catch {
	console.log("document is not available");
}

try {
	console.log(process.version);
} catch {
	console.log("process is not available");
}
