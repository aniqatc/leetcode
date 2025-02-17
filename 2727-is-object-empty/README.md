## Problem: [2727. Is Object Empty](https://leetcode.com/problems/is-object-empty/description/)

[![Easy](https://img.shields.io/badge/Difficulty:%20Easy-4eb247)](https://leetcode.com/problemset/?difficulty=EASY)
[![Solution](https://img.shields.io/badge/Solution:%20JavaScript-F7DF1E)](./solution.js)
[![Notes](https://img.shields.io/badge/Reflection%20&%20Notes-grey)](./NOTES.md)

Given an object or an array, return if it is empty.

- An empty object contains no key-value pairs.
- An empty array contains no elements.

You may assume the object or array is the output of `JSON.parse`.

**Example 1**:

```
Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.
```

**Example 2**:

```
Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.
```

**Example 3**:

```
Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.
```

**Constraints**:

- `obj` is a valid JSON object or array
- `2 <= JSON.stringify(obj).length <= 10^5`
