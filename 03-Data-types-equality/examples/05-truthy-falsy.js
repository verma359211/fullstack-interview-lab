const values = [
	false,
	0,
	-0,
	0n,
	"",
	null,
	undefined,
	NaN,
	"hello",
	"0",
	"false",
	[],
	{},
	function () {},
	1,
	-1,
];

values.forEach((value) => {
	console.log(String(value), "=>", Boolean(value));
});

console.log("\nEmpty array condition:");

const items = [];

if (items) {
	console.log("items is truthy");
}

if (items.length > 0) {
	console.log("items has data");
} else {
	console.log("items is empty");
}

/*
Expected Output includes:

false => false
0 => false
0 => false
0 => false
 => false
null => false
undefined => false
NaN => false
hello => true
0 => true
false => true
 => true
[object Object] => true
function () {} => true
1 => true
-1 => true

Empty array condition:
items is truthy
items is empty
*/
