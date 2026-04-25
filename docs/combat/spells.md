# Spells

Caster classes have access to a full spellbook system. Spells are drawn from official D&D rulebooks and range from level 1 through level 9. You learn spells over time, manage your spell points, and cast in or out of combat.

## Caster Classes

**Full casters** (spell points = level × 2): Wizard, Sorcerer, Cleric, Druid, Bard, Warlock, Wild Mage, Stormsinger, Blightcaster, Favored Soul, Dark Apostate

**Half casters** (spell points = level × 1.5, rounded down): Paladin, Arcane Trickster, Dragon Disciple, Acolyte of the Skin, Dragon Lord

Non-caster classes cannot use spell commands.

## Spell Points

Each caster has a pool of spell points that refills on `!rest` or `!shrine`. Casting a spell costs points equal to its spell level — a level 3 spell costs 3 points, a level 1 spell costs 1 point.

## Spell Slots

You can hold up to 6 spells in your spellbook. One slot unlocks every 2 character levels, so your first slot opens at level 1 and your sixth at level 11.

## Minimum Level to Learn Spells

| Spell Level | Minimum Character Level |
| --- | --- |
| 1 | 1 |
| 2 | 3 |
| 3 | 5 |
| 4 | 7 |
| 5 | 9 |
| 6 | 11 |
| 7 | 13 |
| 8 | 15 |
| 9 | 17 |

## Commands

### `!spells`

View your current spellbook, spell points, and available slots.

### `!cast [spellname]`

Cast a spell. Offensive spells (damage type) can only be cast during a fight. Healing, buff, and utility spells can be cast outside combat. The monster attacks back after every cast just as it would after `!attack`.

Partial spell names work — `!cast fireball` will find Fireball if you know it.

### `!learnspell`

Browse spells available to your class that you have not yet learned, filtered to your current level.

### `!learnspell [spellname]`

Learn a specific spell. You must have an open slot and meet the minimum character level for that spell's level.

### `!prayforspells` / `!prayforspells [spellname]`

Divine casters only (Cleric, Paladin, Favored Soul, Dark Apostate). Same as `!learnspell` with divine flavor.

### `!scribescroll [spellname]`

Learn a spell from a scroll in your inventory. The scroll is consumed. You must be able to cast that spell class and meet the level requirement.

## Armor & Spell Failure

Arcane casters wearing armor risk spell failure on every cast. Divine casters (Cleric, Paladin, Favored Soul, Dark Apostate) and Druid are immune to this penalty.

| Armor Type | Failure Chance |
| --- | --- |
| No armor | 0% |
| Light armor | 10% |
| Medium armor | 25% |
| Heavy armor | 50% |
| Shield only | 5% |

## Concentration

Some spells require concentration to maintain their effect. If you take damage while concentrating, there is a chance the spell breaks.

| Damage Taken | Concentration Fail Chance |
| --- | --- |
| 1–5 | 10% |
| 6–10 | 25% |
| 11–15 | 40% |
| 16+ | 60% |

## Wild Magic Surge

Wild Mages have a 10% chance on every cast to trigger a Wild Magic Surge — a random effect drawn from the official 50-entry surge table. Results range from fireballs centered on yourself to unicorns appearing to heal you to having all your spell points restored. The surge fires after the spell cast, not instead of it.

## Finding Scrolls

Scrolls can be found during `!explore` in treasure chests and rogue skill events. Rarity maps to spell level — common scrolls contain level 1–3 spells, uncommon scrolls 4–6, rare scrolls 7–9. Use `!scribescroll` to add the spell to your spellbook.

::: danger Permadeath
⛔ Spell points are lost on character death along with everything else. Your spellbook does not survive permadeath.
:::

::: tip
ℹ️ `!cast` works as a standalone command during a fight — you do not need to use `!attack` first. The monster will attack back after your cast just as it would on a normal attack turn.
:::
