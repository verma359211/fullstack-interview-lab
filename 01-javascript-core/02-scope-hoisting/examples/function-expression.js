try {
	sayHello();
} catch (err) {
	console.log(err.message);
}

var sayHello = function () {
	console.log("Hello World");
};
