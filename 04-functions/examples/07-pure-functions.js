console.log("Pure function:");

function add(a, b) {
	return a + b;
}

console.log(add(2, 3));
console.log(add(2, 3));

console.log("\nImpure function because it modifies outside state:");

let total = 0;

function addToTotal(value) {
	total += value;
	return total;
}

console.log(addToTotal(5));
console.log(addToTotal(5));

console.log("\nImpure function because same input can give different output:");

function getRandomNumber() {
	return Math.random();
}

console.log(getRandomNumber());
console.log(getRandomNumber());

console.log("\nAvoid mutating input objects:");

function updateUserPure(user) {
	return {
		...user,
		name: "Updated",
	};
}

const user = {
	name: "Chandan",
};

const updatedUser = updateUserPure(user);

console.log(user);
console.log(updatedUser);

/*
Expected Output:

Pure function:
5
5

Impure function because it modifies outside state:
5
10

Impure function because same input can give different output:
Different random values

Avoid mutating input objects:
{ name: 'Chandan' }
{ name: 'Updated' }
*/
