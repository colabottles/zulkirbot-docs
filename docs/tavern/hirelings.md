# Hirelings

Hire a companion from the tavern to fight alongside you. Hirelings deal damage each combat round, occasionally absorb hits meant for you, and have something to say about it every step of the way.

## Hiring a Hireling

`!hireling [class]`

Hiring costs **2 gold** per stream session. You can only have one hireling at a time. If your hireling dies you will need to hire a new one.

All 25 playable classes are available as hirelings. Each class belongs to an archetype that determines their damage die and passive special ability.

### `!hireling status`

Check your current hireling's name, class, and remaining HP.

## Archetypes

| Archetype | Classes | Damage Die | Special |
| --- | --- | --- | --- |
| Melee | Fighter, Barbarian, Monk, Sacred Fist | d10 | +1 on critical rolls |
| Finesse | Rogue, Ranger, Arcane Trickster, Dark Hunter | d8 | 15% chance to find bonus gold on kill |
| Divine | Cleric, Paladin, Favored Soul, Dark Apostate, Acolyte of the Skin | d6 | 20% chance to heal you 1d4 HP after a fight |
| Arcane | Wizard, Sorcerer, Warlock, Wild Mage, Blightcaster, Dragon Lord, Dragon Disciple | d6 | 10% chance to deal double damage |
| Support | Bard, Druid, Stormsinger, Artificer, Alchemist | d4 | 15% chance to grant +2 attack bonus next round |

## Combat Behavior

Each round your hireling attacks the monster for their archetype's damage die. There is also a **20% chance** per monster attack that your hireling steps in front of the hit, absorbing it instead of you.

Your hireling has **3 HP**. Each absorbed hit costs them 1 HP. When their HP reaches 0 they die — dramatically, with last words specific to their archetype.

## Resting

Your hireling rests when you do. Each `!rest` or `!shrine` restores **1 HP** to your hireling. They do not fully recover — manage their HP carefully between fights.

## Flavor

Every hireling has a unique name drawn from their archetype's roster. They announce their presence with a purchase message specific to their archetype and fire random quips during combat. When they die, their last words are suitably melodramatic.

::: tip
ℹ️ Melee hirelings deal the most damage. Divine hirelings are the best choice for long dungeon runs thanks to the post-fight healing. Support hirelings are underrated — the attack bonus stacks with other buffs.
:::

::: warning
⚠️ Your hireling does not survive a bot restart. They are stored in memory only and will be gone when the stream ends. Hire fresh at the start of each session.
:::
