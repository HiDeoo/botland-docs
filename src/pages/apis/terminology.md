---
title: Terminology
order: 1
---

# Terminology

## Terminator

An action that will stop execution of your code (like a `return` in JavaScript).

In the following example, nothing past `move('right');` will be executed:

```js
move('right');

// This code never runs because `move()` is a terminator, so the above
// `move()` statement will exit your update function.
move('left');
```
