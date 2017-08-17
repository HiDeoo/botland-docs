---
title: Offense
order: 2
---

# Offense

## fireLasers

```js
fireLasers([direction|entity]);
```

If a direction is specified, this will attempt to fire lasers in that direction. This can be used to hit cloaked entities.

If an entity is specified, this will attempt to fire the laser at that entity.

*__Note__ This requires Lasers hardware.*

## fireMissiles

```js
fireMissiles([direction|entity]);
```

If an entity is specified, this will try to fire a missile at that entity. Otherwise, it finds the closest enemy bot and shoots at them.

*__Note__ This requires Missiles hardware.*

## fireArtillery

```js
fireArtillery([entity]);
```

*__Note__ This requires Artillery hardware.*

## melee

```js
melee([direction|entity]);
```

*__Note__ This requires Melee hardware.*

## zap

```js
zap();
```

Enables Zapper for X turns, then Zapper is on cooldown for Y turns.

Zapper is a close-range electrical field that deals damage to enemies at the end of your turn.

*__Note__ This requires Zapper hardware.*

## layMine

```js
layMine();
```

Lays a mine at the current location. Mines can only blow up on enemies. You are capped at a certain number of mines across all bots you own. All mines do the same amount of damage.

*__Note__ You need Landmine hardware in order to use mines.*
