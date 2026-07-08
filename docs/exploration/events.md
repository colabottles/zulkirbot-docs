# Explore Events

Use `!explore` (or `!x`) to venture into the dungeon. Each exploration rolls against a table of 14 possible outcomes. You can't explore while in a fight.

## Roll Table

| Roll | Chance | Event |
| --- | --- | --- |
| 1–10 | 10% | Trap |
| 11–12 | 2% | Treasure chest |
| 13–30 | 18% | Gold find |
| 31–33 | 3% | Shrine |
| 34–36 | 3% | Locked chest |
| 37–38 | 2% | Trapped chest |
| 39–40 | 2% | Hidden door |
| 41–42 | 2% | Trapped corridor |
| 43–56 | 14% | Common item |
| 57–66 | 10% | Health potion |
| 67–69 | 3% | Buff event |
| 70–72 | 3% | Debuff event |
| 73–76 | 4% | Environmental hazard |
| 77–80 | 4% | Riddle |
| 81–84 | 4% | God shrine |
| 85–89 | 5% | NPC encounter |
| 90–100 | ~11% | Nothing (rare Deck of Many Things chance) |

## Zero-Kill Penalties

Players with 0 kills face additional challenges:

- **15% pre-roll wandering monster chance** — before any event rolls, there is a 15% chance a monster ambushes you and starts a fight.
- **Treasure chests capped at uncommon** — rare and above items cannot be found in chests until you have at least one kill.

Get into combat to lift these penalties.

## Buff & Debuff Events

When you trigger a buff or debuff event, the effect is stored in Supabase and applied to your combat stats for your next fight.

- **Buffs** last until your next fight ends.
- **Debuffs** last until your next fight ends or 1 hour, whichever comes first.

Possible buff effects: +3 or +5 to ATK, DEF, or DMG.
Possible debuff effects: -3 or -5 to ATK, DEF, or DMG.

## Rogue Skill Events

Some explore outcomes trigger rogue skill events requiring follow-up commands:

| Event | Command |
| --- | --- |
| Locked chest | `!picklock` |
| Trapped chest | `!findtraps` then `!disabletrap` |
| Hidden door | `!searchdoor` then `!opendoor` |
| Trapped corridor | `!findtraps` then `!disabletrap` |

See [Rogue Skills](/combat/rogue-skills) for full details.
