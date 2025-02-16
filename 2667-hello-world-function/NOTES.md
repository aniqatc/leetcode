## Explanation: [2667. Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/description/)

[![Easy](https://img.shields.io/badge/Difficulty:%20Easy-4eb247)](https://leetcode.com/problemset/?difficulty=EASY)

[![Problem](https://img.shields.io/badge/Problem%20Details-grey)](./README.md)
[![Solution](https://img.shields.io/badge/Solution:%20JavaScript-F7DF1E)](./solution.js)

### Key Topics

Closures, Rest Parameters, Higher-Order Functions

### Problem In My Own Words

The function should return another function that returns the string, `"Hello World"`. Any arguments that are passed to the outer function should be ignored.

### Final Solution

- **Time Complexity**: O(1) returns the same string regardless of the input

```js
function createHelloWorld() {
	return function (...args) {
		return 'Hello World';
	};
}
```

### Process

- The outer function is known as a **higher-order function** because it returns another function
- `...args` uses **rest parameters** to allow the inner function to accept any number of arguments within the `arg` array
- Because the inner function has access to the outer function and its variable and arguments is known as a **closure**.

### Test Cases & Findings

```js
const f = createHelloWorld();
console.log(f()); // "Hello World"
console.log(f('hello')); // "Hello World"
console.log(f(['hello'], 'world')); // "Hello World"
console.log(f(null, undefined)); // "Hello World"
```

### What I Learned

- How higher-order functions work
- Using rest parameters to handle arguments
- How closures work

### Resources

- [Leetcode Editorial: Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/editorial/?envType=study-plan-v2&envId=30-days-of-javascript)
- [Freecodecamp: Higher Order Functions in JavaScript](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/)
