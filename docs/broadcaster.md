# Broadcaster Commands

All commands on this page are restricted to the broadcaster (Zulkir Jax) only. Think of this as a peek into what can happen!

## Game Management

| Command | Description |
| --- | --- |
| `!pause` | Pause all game commands |
| `!resume` | Resume all game commands after a manual pause |

## Player Management

| Command | Description |
| --- | --- |
| `!spawn [monster] [user]` | Force spawn a specific monster on a target player. Monster name must match exactly. Target must have a living character and not already be in a fight. |
| `!givegold [user] [amount]` | Give a player a specified amount of gold directly |
| `!kill [user]` | Send a player's character to the graveyard immediately |
| `!revive [user]` | Bring a player back from the graveyard at their last level with rolled HP |
| `!layonhands [user]` | Heal a target player for a specified amount |
| `!inspiration [user]` | Grant the target a guaranteed natural 20, ×2 damage, and +d8 on their next fight |
| `!feeblemind [user]` | Lock all of the target's commands for 2 minutes |
| `!polymorph [user]` | Transform the target into a sheep, locking all commands for 5 minutes |
| `!tasha [user]` | Tasha's Hideous Laughter — locks the target's commands for 2 minutes with flavor on every attempt |
| `!scry [user]` | Reveals the target's HP, gold, level, class, and kill count in flavor text |
| `!deathward [user]` | The next time the target reaches 0 HP they survive at 1 HP instead. Clears on bot restart. |
| `!critical [user]` | The target's next action is an automatic critical hit |
| `!fumble [user]` | The target's next action is an automatic fumble |
| `!advantage [user]` | The target's next action rolls twice and takes the higher result |
| `!disadvantage [user]` | The target's next action rolls twice and takes the lower result |
| `!identify [user]` | Reveals the target's kill count in flavor text |
| `!beholder [user]` | Fire a random eye ray (10 rays) at the target |
| `!deckofmany [user]` | Draw a card from the Deck of Many Things for the target |
| `!tarokka [user]` | Draw a card with Vistani flavor for the target |

## Channel

| Command | Description |
| --- | --- |
| `!heroesfeast` | Grant all players in active fights +50% XP and gold on their next fight for 10 minutes |
| `!poll "Question" Option1 \| Option2` | Run a chat poll with up to 5 options. 5 minute timer. |
| `!poll stop` | End the active poll early and announce results |

## Giveaways

| Command | Description |
| --- | --- |
| `!setcode [codename]` | Load a prize code. Automatically pauses all game commands. |
| `!start giveaway [name]` | Open giveaway entries |
| `!draw` | Pick a winner and whisper them the prize code |
| `!stop giveaway` | Close the giveaway and resume all game commands |

::: warning
⚠️ `!deckofmany` and `!tarokka` can result in permanent character death via The Void and Donjon cards. Use with intent.
:::
