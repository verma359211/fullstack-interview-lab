console.log("Basic closure:");

function outer() {
	let count = 0;

	return function inner() {
		count++;
		console.log(count);
	};
}

const counter = outer();

counter();
counter();
counter();

console.log("\nClosure for private variables:");

function createBankAccount(initialBalance) {
	let balance = initialBalance;

	return {
		deposit(amount) {
			balance += amount;
			return balance;
		},

		withdraw(amount) {
			balance -= amount;
			return balance;
		},

		getBalance() {
			return balance;
		},
	};
}

const account = createBankAccount(1000);

console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());
console.log(account.balance);

console.log("\nClosure trap with var:");

for (var i = 1; i <= 3; i++) {
	setTimeout(function () {
		console.log("var:", i);
	}, 1000);
}

console.log("\nClosure with let:");

for (let j = 1; j <= 3; j++) {
	setTimeout(function () {
		console.log("let:", j);
	}, 1000);
}

/*
Expected Output:

Basic closure:
1
2
3

Closure for private variables:
1500
1300
1300
undefined

Closure trap with var:
var: 4
var: 4
var: 4

Closure with let:
let: 1
let: 2
let: 3
*/
