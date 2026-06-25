function introduce(city, country) {
	console.log(`${this.name} lives in ${city}, ${country}`);
}

const user = {
	name: "Chandan",
};

console.log("call:");

introduce.call(user, "Kolkata", "India");

console.log("\napply:");

introduce.apply(user, ["Kolkata", "India"]);

console.log("\nbind:");

const boundIntroduce = introduce.bind(user);

boundIntroduce("Kolkata", "India");

console.log("\nMethod borrowing:");

const person1 = {
	name: "Chandan",
	sayName() {
		console.log("My name is " + this.name);
	},
};

const person2 = {
	name: "Amit",
};

person1.sayName.call(person2);

console.log("\nLosing this:");

const userObj = {
	name: "Rahul",
	greet() {
		console.log(this.name);
	},
};

const looseGreet = userObj.greet;

try {
	looseGreet();
} catch (err) {
	console.log(err.message);
}

console.log("\nFix with bind:");

const fixedGreet = userObj.greet.bind(userObj);

fixedGreet();

/*
Expected Output:

call:
Chandan lives in Kolkata, India

apply:
Chandan lives in Kolkata, India

bind:
Chandan lives in Kolkata, India

Method borrowing:
My name is Amit

Losing this:
undefined

Fix with bind:
Rahul

Note:
In strict mode, looseGreet may throw because this becomes undefined.
Without strict mode, this may point to global object.
*/
