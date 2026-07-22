---
title: Hirelings
description: Renting NPC companions for solo campaigns
---

## Hirelings

Hirelings are rented NPC companions that fight alongside you during a solo `!campaign` run. They exist to give solo players some of the support a party would normally provide, without needing other chatters online.

Hirelings are temporary. They don't level up, keep loot, or persist between campaigns — they're a gold sink you pay for backup, not a second character.

### Renting a hireling

```plaintext
!hireling <bronze|silver|gold> <class>
```

Example:

```plaintext
!hireling silver rogue
```

You have **two hireling slots**. A new rental fills whichever slot is open or has expired. If both slots are currently occupied by active rentals, you'll need to wait for one to expire before hiring again — there's no early replacement.

### Tiers

Tier only affects **cost**. It has no effect on combat stats.

| Tier   | Cost      |
|--------|-----------|
| Bronze | 50 gold   |
| Silver | 125 gold  |
| Gold   | 250 gold  |

### Classes

Pick one of eight classes. Class determines whether the hireling attacks or heals, and how hard it hits:

| Class     | Role                          |
|-----------|-------------------------------|
| Fighter   | Balanced attacker             |
| Wizard    | Balanced attacker             |
| Rogue     | Bonus damage attacker         |
| Sorcerer  | Bonus damage attacker         |
| Barbarian | Bonus damage attacker         |
| Cleric    | Healer                        |
| Bard      | Healer                        |
| Paladin   | Healer, small damage bonus    |

Healer-class hirelings patch up whichever ally — player or fellow hireling — has the lowest HP each round, instead of attacking. You can hire two of the same class if you want, e.g. two Rogues.

### Level

A hireling's level is rolled automatically when you hire it: one below, equal to, or one above your character's current level. This — not tier — is what drives its HP and damage. You don't choose it directly.

## Checking your hirelings

```plaintext
!hireling status
```

Shows both slots, including class, level, and time remaining on each active rental:

```plaintext
Slot 1: Level 6 Rogue, 12m left. Slot 2: empty.
```

## Rental duration

Every hireling contract lasts **one hour** from the moment you hire it. Once a slot's rental expires, that slot becomes available for a new hire. Time isn't checked mid-combat — whatever hireling(s) you brought into a campaign fight with you for the whole run, even if the contract technically runs out partway through.

## In combat

- Hirelings act automatically each round — no `!attack` needed from you
- They show up at full HP every run, regardless of how the last run ended for them
- Enemies can target hirelings the same way they target players
- If a hireling's HP hits 0, it's knocked out for the rest of that run only — it's back at full strength next time as long as the rental hasn't expired
- Rest shrines heal hirelings the same way they heal players

## What hirelings don't do

- No XP, gold, titles, or artifact drops — rewards only go to real characters
- Not available in `!party` campaigns — solo runs only
- Don't persist between campaigns beyond the rental timer; there's no hireling "character sheet" to manage
