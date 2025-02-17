## Explanation: [2703. Return Length Of Arguments Passed](https://leetcode.com/problems/return-length-of-arguments-passed/description/)

[![Easy](https://img.shields.io/badge/Difficulty:%20Easy-4eb247)](https://leetcode.com/problemset/?difficulty=EASY)
[![Problem](https://img.shields.io/badge/Problem%20Details-grey)](./README.md)
[![Solution](https://img.shields.io/badge/Solution:%20JavaScript-F7DF1E)](./solution.js)

### Key Topics

Rest Parameters, Arguments Object

### Problem In My Own Words

Create a function that returns the number of arguments that were passed to it, regardless of the argument types.

## Final Solution

- **Time Complexity**: O(1) since we're just accessing a length property

```js
function argumentsLength(...args) {
	return args.length;
}
```

### Process

The solution uses the rest parameter syntax `...args` in order to collect all of the arguments into a single array and then, returns the length of that array using the `length` property on the `args` array.

### Test Cases & Findings

```js
argumentsLength(1, 2, 3); // 3
argumentsLength(['a', 'b'], 'c', 123, true); // 4
```

### What I Learned

- Using rest parameters to college arguments into an array

### Resources

- [MDN Web Documentation: Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
