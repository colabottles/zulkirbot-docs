# Combat

## !battle

Start a combat encounter (`!battle` - Shortcut key: `!b`) against a random monster scaled to your level.

## !attack

Attack the monster during a battle. You can also use `!a` as a shortcut.

## !flee

Attempt to escape. The monster gets a parting shot. 🐔 Shortcut keys: `!f` and `!esc`.

## Combat Flow

1. Type `!battle` to encounter a monster
2. Type `!attack` to strike the monster each round
3. Repeat until the monster is defeated or type `!flee` to escape

## !rest

Recover to full HP. Watch out — there's a chance a wandering monster finds you while you rest. Shortcut key: `!r`.

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

Found via `!explore`. Has a 15% chance to remove a cursed item. Also recharges spell points, hireling HP restore, and !turnundead reset only trigger when the curse removal fails, not when it succeeds. On success, only the curse is lifted.

## !status stats

View your current combat bonuses derived from equipped gear and class: attack bonus, defense bonus, damage bonus, and HP bonus.

> [!DANGER]
> **Death is permanent.** If your HP reaches 0 in combat, your character is deleted. Use `!join` to start over.
