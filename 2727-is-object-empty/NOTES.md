## Explanation: [2727. Is Object Empty](https://leetcode.com/problems/is-object-empty/description/)

[![Easy](https://img.shields.io/badge/Difficulty:%20Easy-4eb247)](https://leetcode.com/problemset/?difficulty=EASY)
[![Problem](https://img.shields.io/badge/Problem%20Details-grey)](./README.md)
[![Solution](https://img.shields.io/badge/Solution:%20JavaScript-F7DF1E)](./solution.js)

### Key Topics

Objects

### Problem In My Own Words

Create a function that checks if the passed object or array is empty. Return `true` if empty and `false` if there are any values.

### Final Solution

- **Time Complexity**: O(n) complexity because the operation depends on the `n` number of properties in the object

```js
function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}
```

### Process

The solution uses `Object.keys()` to create an array of the object's property names (keys). By checking if this array's length is 0, I can determine if the object (or array) is empty.

This approach would work for both arrays and objects because:

- Arrays are objects with numeric keys (elements in the array are the values that correspond with the numeric keys)
- `Object.keys()` works on both objects and arrays
- An empty array `[]` has no keys, just like an empty object `{}`

### Test Cases & Findings

```js
// Objects
isEmpty({}); // true
isEmpty({ a: 1 }); // false

// Arrays
isEmpty([]); // true
isEmpty([1, 2, 3]); // false
```

### Resources

- [Leetcode Editorial: 2727. Is Object Empty](https://leetcode.com/problems/is-object-empty/editorial)
- [MDN Web Documentation: Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
