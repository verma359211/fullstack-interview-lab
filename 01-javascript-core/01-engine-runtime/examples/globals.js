/*
Global Objects
*/

console.log("globalThis exists:", !!globalThis);

console.log(
	"globalThis === global:",
	typeof global !== "undefined" && globalThis === global,
);

console.log(
	"globalThis === window:",
	typeof window !== "undefined" && globalThis === window,
);
