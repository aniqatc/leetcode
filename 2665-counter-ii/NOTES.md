## Explanation: [2665. Counter II](https://leetcode.com/problems/counter-ii/description/)

[![Easy](https://img.shields.io/badge/Difficulty:%20Easy-4eb247)](https://leetcode.com/problemset/?difficulty=EASY)
[![Problem](https://img.shields.io/badge/Problem%20Details-grey)](./README.md)
[![Solution](https://img.shields.io/badge/Solution:%20JavaScript-F7DF1E)](./solution.js)

### Key Topics

Closures, Factory Functions

### Problem In My Own Words

Create a function `createCounter` that accepts an initial value and returns an object with three additional functions:

- `increment()` increases the current value by 1 and returns it
- `decrement()` decreases the current value by 1 and returns it
- `reset()` changes the current value back to the initial value and returns it

### Final Solution

- **Time Complexity**: O(1) for each counter function call

```js
function createCounter(init) {
	let current = init;

	return {
		increment: function () {
			return ++current;
		},
		decrement: function () {
			return --current;
		},
		reset: function () {
			return (current = init);
		},
	};
}
```

### Process

The solution I came up with was to just create a function that returns an object with three different functions. These function methods inside the returned object would have access to the `current` variable that represents the current count as it changes and the object would have access to `init` which represents the initial value that is used when the `createCounter()` is first called.

The key aspect for this solution is that all three methods share access to the same `current` variable, ensuring that the `increment()`, `decrement()` and `reset()` methods will have the most recently updated value to manipulate.

_For example_:

1. When `increment()` is called, it increases and returns the shared `current` value
2. If `decrement()` is called next, it sees the updated value from the previous increment
3. When `reset()` is called, it can access both `current` to update it and `init` to know what value to reset to

**Difference between pre-increment and post-increment**

- `count++` returns the value and then, increments the value
- `++count` increments the value, and then returns the value

### Test Cases & Findings

```js
const counter = createCounter(5);
counter.increment(); // 6 (current value of 5 + 1)
counter.reset(); // 5 (reset to initial value of 5)
counter.decrement(); // 4 (current value of 5 - 1)
```

### What I Learned

- Multiple functions can share the closure scope

### Resources

- [Digital Ocean: Understanding Closures](https://www.digitalocean.com/community/tutorials/js-closures)
- [MDN Web Documentation: Object Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
