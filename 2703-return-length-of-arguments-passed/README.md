## [2703. Return Length Of Arguments Passed](https://leetcode.com/problems/return-length-of-arguments-passed/description/)

[![Easy](https://img.shields.io/badge/Difficulty:%20Easy-4eb247)](https://leetcode.com/problemset/?difficulty=EASY)

[![Solution](https://img.shields.io/badge/Solution:%20JavaScript-F7DF1E)](./solution.js)
[![Notes](https://img.shields.io/badge/Reflection%20&%20Notes-grey)](./NOTES.md)

Write a function `argumentsLength` that returns the count of arguments passed to it.

**Example 1**:

```
Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
```

**Example 2**:

```
Input: args = [{}, null, "3"]
Output: 3
Explanation:
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.
```

**Constraints**:

- `args` is a valid JSON array
- `0 <= args.length <= 100`
