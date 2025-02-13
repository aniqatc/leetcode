## [2667. Create Hello World Function](https://leetcode.com/problems/create-hello-world-function/description/)

[![Easy](https://img.shields.io/badge/Easy-4eb247)](https://leetcode.com/problemset/?difficulty=EASY)
[![JavaScript](https://img.shields.io/badge/JavaScript-FF6700)](https://leetcode.com/studyplan/30-days-of-javascript/)

Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`.

**Example 1**:

```
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
```

**Example 2**:

```
Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
```

**Constraints**:

- `0 <= args.length <= 10`
