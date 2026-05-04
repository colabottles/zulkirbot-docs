# Rogue Skills

Rogues, Arcane Tricksters, Rangers, and Artificers have access to a set of skill commands that unlock additional rewards during `!explore`. When the dungeon presents a locked chest, a trapped corridor, or a hidden door, these commands let you act on them.

## How It Works

Rogue skill commands now require sequential steps. You cannot skip ahead — each event has a required order that must be followed before the final action becomes available.

When you use `!explore` and encounter a skill-based event, the bot will tell you what you found and which command to use next. You have **3 minutes** to complete the sequence before the opportunity expires.

Each command has a success chance that varies by class. Ineligible classes can still attempt the commands but with a much lower success chance, and failure often has consequences.

## Command Sequences

### Trapped Chest or Trapped Corridor

1. `!explore` detects the event and auto-senses something is wrong
2. `!findtraps` — identify the trap
3. `!disabletrap` — disarm it (only available after `!findtraps` succeeds)

### Hidden Door or Suspicious Wall

1. `!explore` detects the event
2. `!searchdoor` — find the hidden passage
3. `!opendoor` — open it (only available after `!searchdoor` succeeds)

### Locked Chest

1. `!explore` detects the locked chest
2. `!picklock` — attempt to open it directly (no prior step required)

## Commands

### `!picklock`

Attempt to open a locked chest.

**Eligible classes:** Rogue, Arcane Trickster, Artificer

On success, the chest opens and yields a rare or better item plus gold. On failure, a trapped mechanism may fire for damage, or the lock simply holds.

### `!findtraps`

Reveal hidden traps before committing to disarming them.

**Eligible classes:** Rogue, Arcane Trickster, Artificer

Must be used before `!disabletrap`. On success, the trap is identified and `!disabletrap` becomes available. On failure, nothing is revealed — the trap is still there and the window remains open.

### `!disabletrap`

Disarm a trapped chest or trapped corridor.

**Eligible classes:** Rogue, Arcane Trickster, Ranger

Requires `!findtraps` to have succeeded first. On success, the trap is neutralized and you earn bonus XP. If the event was a trapped chest, the chest beneath it also opens for loot. On failure, the trap fires for damage.

### `!searchdoor`

Search a suspicious wall or unusual section of stonework for a hidden passage.

**Eligible classes:** Rogue, Arcane Trickster, Ranger

Must be used before `!opendoor`. On success, the passage is found and `!opendoor` becomes available. On failure, the wall remains a wall.

### `!opendoor`

Open a hidden passage found by `!searchdoor`.

**Eligible classes:** Rogue, Arcane Trickster, Ranger

Requires `!searchdoor` to have succeeded first. On success, the passage opens onto a loot cache — gold and a chance at an uncommon or rare item. On failure is not possible — if `!searchdoor` succeeded, the door opens.

## Success Chances by Class

| Command | Rogue | Arcane Trickster | Artificer | Ranger | Other |
| --- | --- | --- | --- | --- | --- |
| `!picklock` | 80% | 70% | 65% | — | 20% |
| `!findtraps` | 90% | 75% | 70% | — | 20% |
| `!disabletrap` | 80% | 65% | — | 60% | 15% |
| `!searchdoor` | 85% | 70% | — | 65% | 20% |
| `!opendoor` | — | — | — | — | — |

## Explore Events

| Event | Triggered By | Required Sequence |
| --- | --- | --- |
| Locked chest | `!explore` roll | `!picklock` |
| Trapped chest | `!explore` roll | `!findtraps` → `!disabletrap` |
| Hidden door | `!explore` roll | `!searchdoor` → `!opendoor` |
| Trapped corridor | `!explore` roll | `!findtraps` → `!disabletrap` |

::: tip
ℹ️ You cannot skip steps. `!disabletrap` requires `!findtraps` to succeed first, and `!opendoor` requires `!searchdoor` to succeed first.
:::

::: warning
⚠️ You cannot use rogue skill commands while in a fight. Finish the fight first, then explore.
:::
