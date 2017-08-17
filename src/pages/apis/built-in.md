---
title: Built-in Functions
order: 5
---

# Built-in Functions

## getX

```js
getX(entity);
```

Gets the X coordinate of the specified entity.

## getY

```js
getY(entity);
```

Gets the Y coordinate of the specified entity.

## canMove

```js
canMove([direction]);
```

If a direction is specified, this will return `true` if you can move in that direction. If no direction is specified, this will return `true` if you can move in any direction.

## canMoveTo

```js
canMoveTo(x, y);
canMoveTo(entity);
```

Returns `true` if you can sense a path to the target coordinates or entity.

*__Note__ This means if entity is, say, 10 tiles away, this will always return `false` because you can’t sense that far.*

## canCloak

```js
canCloak();
```

Returns `true` if you can cloak (which means you have the Cloaking hardware and it’s not on cooldown).

## canZap

```js
canZap();
```

Returns `true` if you can zap (which means you have the Zapper hardware and it’s not on cooldown).

## canEMP

```js
canEMP();
```

Returns `true` if you can EMP (which means you have the EMP hardware and it’s not on cooldown).

## canReflect

```js
canReflect();
```

Returns `true` if you can reflect (which means you have the Reflect hardware and it’s not on cooldown).

## canLayMine

```js
canLayMine();
```

Returns `true` if you can lay a mine (which means you’re not standing on a mine (that you can sense) and you have the Landmines hardware).

## isCloaked

```js
isCloaked();
```

Returns `true` if you’re currently cloaked.

## isZapping

```js
isZapping();
```

Returns true if you’re currently zapping.

## isReflecting

```js
isReflecting();
```

Returns `true` if you’re currently reflecting.

## getDistanceTo

```js
getDistanceTo(x, y);
getDistanceTo(entity);
```

Returns the Manhattan distance to the specified target. If you specified an entity that you can’t sense, this will return Infinity.

## getEntityAt

```js
getEntityAt(x, y);
```

Returns the `entity` at the given coordinates (if you can sense that entity).

## isEnemyMineAt

```js
isEnemyMineAt(x, y);
```

Returns `true` if there’s a mine that you can sense at the given coordinates. You can reveal mines with `revealMines()`.

## willMissilesHit

```js
willMissilesHit([entity]);
```

If you pass an entity, this will return `true` if you can sense the target entity and it’s within missile range.

If you pass nothing, this will return `true` if there is any enemy entity that you can hit with a missile.

## willLasersHit

```js
willLasersHit([direction|entity]);
```

If you pass a direction, this will return `true` if a laser will hit an entity in that direction.

If you pass an entity, this will return `true` if you can hit that specific entity with a laser (which means that if a visible enemy is in between you and the specified entity, this will return `false`).

If nothing is specified, then this will return `true` if firing a laser in any direction will cause the laser to hit.

## findClosestEnemyBot

```js
findClosestEnemyBot();
```

This returns an `entity` representing the closest enemy bot, or `null` if you cannot sense one.

## findClosestResource

```js
findClosestResource();
```

This returns an `entity` representing the closest resource, or `null` if you cannot sense one.

## canSense

```js
canSense(entity);
```

Returns `true` if you can sense the target entity (meaning they’re within vision range and they’re not cloaked).

## canSenseEntity

```js
canSenseEntity(entity);
```

Returns `true` if you can sense the target entity (meaning they’re within vision range and they’re not cloaked).

## exists

```js
exists(anyValue);
```

Returns `true` if the value is not `null` and is not `undefined`. This is useful for checking return values of APIs like `findClosestEnemyBot()` to make sure they exist.

## reduceEntities

```js
reduceEntities(entities, REDUCE_BY_MISSING_LIFE);
```

Takes in an array of entities and reduces them to the total amount of missing life that they have.

## getLife

```js
getLife(entity);
```

Returns the life value of a bot, enemies or allies. You can also use `.life` to get the same values.

## findEntities

```js
findEntities(friendlyOrEnemy, type, allowReturningSelf);
```

Returns all friendly or enemy entities of a specified type. `allowReturningSelf` says whether the bot finding the entities can be returned if it matches the search parameters or not.

## findEntitiesInRange

```js
findEntitiesInRange(friendlyOrEnemy, type, allowReturningSelf, range);
```

Returns all friendly or enemy entities of a specified type within a specific range. `allowReturningSelf` says whether the bot finding the entities can be returned if it matches the search parameters or not.

## filterEntities

```js
filterEntities(entities, filter1, [filter2]);
```

Filters a list of entities and returns a single entity based on up to two filters, e.g. "lowest distance" and then "lowest life".
