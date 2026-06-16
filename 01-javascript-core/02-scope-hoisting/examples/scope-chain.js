const a = "Global";

function outer() {
	const b = "Outer";

	function inner() {
		const c = "Inner";

		console.log(a);
		console.log(b);
		console.log(c);
	}

	inner();
}

outer();
