# Combat

## !fight

Encounter a random monster scaled to your level. Use `!battle` as an alternative.

## !battle

Alias for `!fight`. Starts a combat encounter.

## !attack

Attack during a battle. You can also use `!a` as a shortcut.

## !flee

Attempt to escape. The monster gets a parting shot. 🐔

## !rest

Recover to full HP. Watch out — there's a chance a wandering monster finds you while you rest.

## !explore

Search the dungeon for gold, loot, traps, shrines, and hidden secrets. Possible outcomes include:

- Gold finds
- Item drops (common through legendary)
- Health potions
- Traps (damage or instant death)
- Locked chests — use `!picklock`
- Trapped chests — use `!findtraps` then `!disabletrap`
- Hidden doors — use `!searchdoor` then `!opendoor`
- Trapped corridors — use `!findtraps` then `!disabletrap`
- Ancient shrines — use `!shrine`
- The Deck of Many Things (very rare)

## !shrine

Found via `!explore`. Has a 15% chance to remove a cursed item. Also recharges spell points, restores 1 hireling HP, and resets `!turnundead` cooldown.

## !status stats

View your current combat bonuses derived from equipped gear and class: attack bonus, defense bonus, damage bonus, and HP bonus.

> [!DANGER]
> **Death is permanent.** If your HP reaches 0 in combat, your character is deleted. Use `!join` to start over.
