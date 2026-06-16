console.log("Without strict mode:");

try {
	name1 = "Chandan";
	console.log(name1);
} catch (err) {
	console.log(err.message);
}

console.log("\nWith strict mode:");

try {
	(function () {
		"use strict";

		name2 = "Chandan";
	})();
} catch (err) {
	console.log(err.message);
}
