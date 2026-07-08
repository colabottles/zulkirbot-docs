# Visiting & Raiding

## Visiting

Visit another player's stronghold to gain benefits and boost their morale.

!visit @username

### Visit Effects

- **+5 morale** to the host's stronghold.
- **Tavern** (if built) — visitor heals 10 HP.
- **Library** (if built) — visitor gains +50 XP.
- **Magic Laboratory** (if built) — visiting casters gain +3 spell points.
- **10% alliance chance** — a diplomatic alliance may form, granting +2 DEF to both strongholds.

You must have your own stronghold before visiting others.

## Alliances

Alliances form randomly during visits (10% chance). Allied strongholds receive a permanent +2 DEF bonus while the alliance stands.

::: warning
You cannot raid a stronghold you are allied with.
:::

## Raiding

Attack another player's stronghold to steal gold, materials, and damage their rooms.

!raid @username

### How Raids Work

Raids are auto-resolved. The outcome is determined by comparing:

- **Attacker ATK + morale bonus** vs **Defender DEF + morale bonus**
- A d100 roll is added to each side — anything can happen.

### Attacker Wins

- Steals **10–20% of the defender's gold**.
- Steals **15% of one random material**.
- Each room has a **10% chance of being damaged**.
- Defender loses **15 morale**.

### Attacker Loses

- Attacker's stronghold loses **5–30 HP**.
- Attacker loses **10 morale**.

### Morale Effect

Morale ranges from 0–100. The morale bonus applied to raid rolls is:

floor((morale - 50) / 10)

A morale of 80 gives +3 to the roll. A morale of 20 gives -3.

### Raiding Rules

- You can raid as often as you like — there is no cooldown.
- You cannot raid an ally.
- You must have your own stronghold to raid others.
