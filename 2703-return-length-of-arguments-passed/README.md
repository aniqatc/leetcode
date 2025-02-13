## [2703. Return Length Of Arguments Passed](https://leetcode.com/problems/return-length-of-arguments-passed/description/)

[![Easy](https://img.shields.io/badge/Easy-4eb247)](https://leetcode.com/problemset/?difficulty=EASY)
[![JavaScript](https://img.shields.io/badge/JavaScript-FF6700)](https://leetcode.com/studyplan/30-days-of-javascript/)

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
