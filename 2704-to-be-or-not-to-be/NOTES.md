## Explanation: [2704. To Be Or Not To Be](https://leetcode.com/problems/to-be-or-not-to-be/description/)

[![Easy](https://img.shields.io/badge/Difficulty:%20Easy-4eb247)](https://leetcode.com/problemset/?difficulty=EASY)
[![Problem](https://img.shields.io/badge/Problem%20Details-grey)](./README.md)
[![Solution](https://img.shields.io/badge/Solution:%20JavaScript-F7DF1E)](./solution.js)

### Key Topics

Closures, Factory Functions

### Problem In My Own Words

Create a function that can take value of `val` and return an object that has two methods that compares `val` to a second value:

- `toBe(val2)` accepts `val2` and returns true if they both `===` each other, otherwise, an error is thrown with the text `'Not Equal'`
- `notToBe(val2)` accepts `val2` and returns true if they both `!==` each other, otherwise, an error is thrown with the text `'Equal'`

### Final Solution

- **Time Complexity**: O(1) for each function method call

```js
function expect(val) {
	return {
		toBe: function (val2) {
			if (val === val2) {
				return true;
			} else {
				throw new Error('Not Equal');
			}
		},
		notToBe: function (val2) {
			if (val !== val2) {
				return true;
			} else {
				throw new Error('Equal');
			}
		},
	};
}
```

### Process

The outer function `expect(val)` takes an initial value to hold in scope for the return object methods to use for comparison. `expect()` returns an object with two comparison methods. Both of these methods (`toBe` and `notToBe`) accepts a second value for comparison:

- `toBe` uses strict equality on both the initial value and the second value that is passed to into `toBe(val2)`
- `notToBe` uses strict inequality on both the initial value and the second value that is passed to into `notToBe(val2)`

### Test Cases & Findings

```js
expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"
```

### Resources

- [Digital Ocean: Understanding Closures](https://www.digitalocean.com/community/tutorials/js-closures)
- [MDN Web Documentation: Object Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
