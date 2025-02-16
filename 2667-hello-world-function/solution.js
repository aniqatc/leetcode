/**
 * @return {Function}
 */

function createHelloWorld() {
	return function (...args) {
		return 'Hello World';
	};
}

const f = createHelloWorld();
console.log(f()); // "Hello World"
console.log(f('hello')); // "Hello World"
console.log(f(['hello'], 'world')); // "Hello World"
console.log(f(null, undefined)); // "Hello World"
