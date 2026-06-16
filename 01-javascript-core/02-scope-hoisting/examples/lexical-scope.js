const name = "Chandan";

function outer() {
	function inner() {
		console.log(name);
	}

	inner();
}

outer();
