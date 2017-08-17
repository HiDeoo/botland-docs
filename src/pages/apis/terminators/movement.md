---
title: Movement
order: 1
---

# Movement

## move

```js
move([direction]);
```

If a direction is specified, this will attempt to move in that direction. If no direction is specified, this will pick a random valid direction to move in.

## moveTo

```js
moveTo(x, y);
moveTo(entity);
```

Attempts to find a path to the target location or entity, taking into account revealed enemy mines if they are in the way.

*__Note__ Remember that your vision range is only 5 tiles, so doing `moveTo(farAwayX, farAwayY)` may not be effective. Try using `canMoveTo()` before calling this function.*

## teleport

```js
teleport(x, y);
teleport(entity);
```

Teleports your bot to the target location or entity.

*__Note__ This requires Teleport hardware.*

## pursue

```js
pursue(item|entity);
```
