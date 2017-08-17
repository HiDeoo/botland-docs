---
title: Cloaking
order: 3
---

# Cloaking

Temporarily makes your machine invisible. All damage dealt while cloaked is decreased.

| Tier | Duration | Cooldown | Damage dealt reduction |
| --- | --- | --- | --- |
| 1 | 3 | 9 | 40% |
| 2 | 4 | 9 | 40% |
| 3 | 6 | 9 | 40% |

Bots can attack, move, teleport, etc. while cloaked.

There are some soft counters to cloaking:

 * Area-of-effect abilities like Zapper or Artillery.
 * Fiery weapons like Inferno Zapper and Inferno Lasers. When a cloaked bot is on fire, it is made visible.
 * Blind-firing weapons. All lasers can be fired without specifying a target via the API `fireLasers(DIRECTION)`. You as a player can see the cloaked bots, so if you know they're always to the right or left of you, you can say `fireLasers('left');` and still hit cloaked bots.
 * Moving into cloaked bots will decloak them.
