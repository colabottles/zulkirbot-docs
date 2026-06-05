# Gladiator Arena

The broadcaster can throw chat into a gladiator arena — waves of monsters, one shared health bar per enemy, no permanent death.

## Commands

| Command | Description |
| --- | --- |
| `!arena` | Broadcaster only. Opens a 60-second join window. |
| `!enterarena` | Join the arena during the join window. Requires a living character. |
| `!attack` | Strike the current enemy on your turn. |

## How It Works

1. The broadcaster types `!arena` — a 60-second window opens for players to join with `!enterarena`.
2. Once the window closes the arena begins automatically.
3. Waves of monsters are released one at a time. Each player takes their turn typing `!attack`.
4. Fallen players are out for the rest of the arena — but there is no permadeath. Use `!rest` to recover afterward.
5. Survivors earn XP and gold for every wave cleared.

## Wave Count

| Players | Waves |
| --- | --- |
| 1–2 | 4 |
| 3–4 | 5 |
| 5+ | 6 |

## Rewards

All survivors earn XP and gold scaled to the number of waves cleared. The more waves you survive, the bigger the payout. Fallen players receive nothing.

## Enemy Roster

| Wave | Enemy | Special Move |
| --- | --- | --- |
| 1 | Giant Hyena Pack | — |
| 2 | Retiarius Gladiator | Net Throw |
| 3 | Manticore | Tail Spike Volley |
| 4 | Darkmantle Swarm | Darkness Pulse |
| 5 | The Arena Master | Executioner's Strike |
| Final | Valdris the Unbroken | Wrath of the Undefeated |

> [!WARNING]
> Fallen gladiators are left at 0 HP. Use `!rest` to recover before your next fight.
