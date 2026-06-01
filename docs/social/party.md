# Party System & Raids

| Command | Description |
| --- | --- |
| `!party create` | Form a new party. Max 10 members. |
| `!party join` | Join an open party. Joins the oldest open party automatically. Players can't choose which party to join. |
| `!party leave` | Leave your current party. |
| `!party status` | View your party's members and status. |
| `!party raid` | Spawn a random raid boss. Party leader only. |
| `!party attack` | Attack during a raid on your turn. |

## Raids

Raids are turn-based. Each party member attacks the boss in turn. The boss fights back after each attack targeting a random party member.

The party must be full (10 members) before the leader can start a raid. Boss HP and attack scale with party size.

If the leader leaves, leadership passes to another member automatically.

> [!NOTE]
> If you fall in a raid there is **no permadeath**. Use `!rest` when the raid ends.

XP and gold are distributed based on damage dealt. Every survivor gets a rare or better item, fallen members get nothing. There is a **5% chance** the boss drops their legendary named item to one lucky party member.
