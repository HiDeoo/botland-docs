---
title: Built-in Util Functions
order: 6
---

# Built-in Util Functions

## percentChance

```js
percentChance(number);
```

Returns `true “number%”` of the time. For example, if you pass in 50, this will return true half the time. If you pass 100, this will always return true.

## randInt

```js
randInt(inclusiveMin, exclusiveMax);
```

Generates a random integer between `inclusiveMin` and `exclusiveMax`.

## clampNumber

```js
clampNumber(number, lower, upper);
```

Clamps `number` within the `lower` and `upper` bounds.

## size

```js
size(Array|string);
```

Returns the size of an Array or a string.
