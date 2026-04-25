# Rogue Skills

Rogues, Arcane Tricksters, Rangers, and Artificers have access to a set of skill commands that unlock additional rewards during `!explore`. When the dungeon presents a locked chest, a trapped corridor, or a hidden door, these commands let you act on them.

## How It Works

When you use `!explore` and encounter a skill-based event, the bot will tell you what you found and which command to use. You have **3 minutes** to respond before the opportunity expires.

Each command has a success chance that varies by class. Ineligible classes can still attempt the commands but with a much lower success chance, and failure often has consequences.

## Commands

### `!picklock`

Attempt to open a locked chest.

**Eligible classes:** Rogue, Arcane Trickster, Artificer

On success, the chest opens and yields a rare or better item plus gold. On failure, a trapped mechanism may fire for damage, or the lock simply holds.

### `!disabletrap`

Disarm a trapped chest or trapped corridor before it fires.

**Eligible classes:** Rogue, Arcane Trickster, Ranger

On success, the trap is neutralized and you earn bonus XP. If the event was a trapped chest, the chest beneath it also opens for loot. On failure, the trap fires for damage.

### `!findtraps`

Reveal hidden traps before committing to disarming them.

**Eligible classes:** Rogue, Arcane Trickster, Artificer

On success, the trap is revealed and identified, and you can follow up with `!disabletrap` with full information. On failure, nothing is revealed — but the trap is still there.

### `!searchdoor`

Search a suspicious wall or unusual section of stonework for a hidden passage.

**Eligible classes:** Rogue, Arcane Trickster, Ranger

On success, a hidden passage opens onto a loot cache — gold and a chance at an uncommon or rare item. On failure, the wall remains a wall.

## Success Chances by Class

| Command | Rogue | Arcane Trickster | Artificer | Ranger | Other |
| --- | --- | --- | --- | --- | --- |
| `!picklock` | 80% | 70% | 65% | — | 20% |
| `!disabletrap` | 80% | 65% | — | 60% | 15% |
| `!findtraps` | 90% | 75% | 70% | — | 20% |
| `!searchdoor` | 85% | 70% | — | 65% | 20% |

## Explore Events

These events appear randomly during `!explore` alongside the existing trap and chest system. They are rarer than standard treasure finds — keep an eye on chat when you explore.

| Event | Triggered By | Commands |
| --- | --- | --- |
| Locked chest | `!explore` roll | `!picklock` |
| Trapped chest | `!explore` roll | `!findtraps`, `!disabletrap` |
| Hidden door | `!explore` roll | `!searchdoor` |
| Trapped corridor | `!explore` roll | `!findtraps`, `!disabletrap` |

::: tip
 ℹ️`!findtraps` and `!disabletrap` can both be used on the same event. Finding the trap first does not consume it — you can then disarm it with full knowledge of what you're dealing with.
:::

::: warning
⚠️ You cannot use rogue skill commands while in a fight. Finish the fight first, then explore.
:::
