---
title: Miscellaneous
order: 2
---

# Miscellaneous

## Directions

When the API requires a `direction`, the possible directions are : `up`, `right`, `down` and `left`.

## Hardware categories

Hardware is separated into categories. For example, Lasers and Inferno Lasers are both of type "lasers" (obviously). This means that you don't need to change your code if you switch which kind of hardware you're using within a category.

The following code will simply shoot whichever kind of laser you have:

```js
if (willLasersHit()) {
  fireLasers();
}
```

## Missing hardware

If you attempt to use an API that requires hardware that you don’t have, it will be skipped (even [terminators](/apis/terminology#terminator)). For example, if you have this code:

```js
// This would normally terminate, but if you don't have Lasers
// equipped, then it will be skipped.
fireLasers('right');

// This will always be hit if you don't have Lasers.
move('left');
```

## Vision range

Any API that takes in an entity will first check to see if you can sense that entity, meaning they are in your vision range (**5 tiles**) and they are not cloaked.

## Cloaking

Cloaked enemies cannot be sensed unless they're affected by a damage-over-time effect like being on fire.

If there is a cloaked enemy to your right and you call `canMove('right')`, it will return `true` even though you actually can’t move right, because as far as your bot is concerned, there is no bot to the right (because it’s cloaked).

*__Note__ Attempting to move into a cloaked enemy will uncloak it.*
