# Boss Invasions

Boss invasions are channel-wide events triggered by the broadcaster. When a legendary enemy invades, every viewer can join the fight — the more adventurers who answer the call, the better the odds of survival.

## How It Works

1. The broadcaster triggers an invasion with `!invasion [boss_id]`
2. A **2-minute join window** opens — type `!joinevent` to enlist
3. Once the window closes, the battle begins
4. Boss HP is posted to chat every 2 minutes automatically.
5. The boss must be killed within **10 minutes** or the realm falls

## Commands

| Command | Who | Description |
| --- | --- | --- |
| `!invasion [boss_id]` | Broadcaster | Starts the invasion |
| `!invasion status` or `!invasion info` | Anyone | Shows current boss HP, participant count, and time remaining |
| `!invasion cancel` | Broadcaster | Cancels the active invasion |
| `!joinevent` | Anyone | Enlists during join window; attacks during fight phase |

## Boss Scaling

Boss HP scales with how many adventurers answer the call — a solo hero faces a much weaker foe than a full raid. Every invasion is a challenge regardless of viewer count.

```plaintext
Boss HP = base_hp + (participants × hp_per_player)
```

Bosses also **counterattack** — there is a 25% chance per hit that the boss retaliates against all participants. Counterattack damage cannot reduce anyone below 1 HP. Invasions do not cause permadeath.

## Rewards

Every participant who enlists receives all of the following when the boss falls:

- **XP** — scaled to boss tier
- **Gold** — scaled to boss tier
- **Unique title** — permanently added to your title collection
- **Legendary item** — per-player drop chance based on boss tier

## Boss Roster

### Tier 1 — Legendary

| Boss ID | Name | Title | Title Reward |
| --- | --- | --- | --- |
| `acererak` | Acererak | the Devourer of Souls | Tomb Breaker |
| `vecna` | Vecna | the Undying King | Keeper of No Secrets |
| `larloch` | Larloch | the Shadow King | Shadow Breaker |

Legendary bosses scale at +28–30 HP per participant. Legendary item drop chance: 7–8%.

### Tier 2 — Demigod

| Boss ID | Name | Title | Title Reward |
| --- | --- | --- | --- |
| `orcus` | Orcus | Prince of Undeath | Undeath's Bane |
| `demogorgon` | Demogorgon | Prince of Demons | Sanity's Defender |
| `tiamat` | Tiamat | Queen of Evil Dragons | Dragonsbane |
| `yeenoghu` | Yeenoghu | Beast of Butchery | Famine's End |

Demigod bosses scale at +38–45 HP per participant. Legendary item drop chance: 11–13%.

### Tier 3 — True God

| Boss ID | Name | Title | Title Reward |
| --- | --- | --- | --- |
| `asmodeus` | Asmodeus | Lord of the Nine Hells | Hell's Defiant |
| `tharizdun` | Tharizdun | the Chained God | Void Walker |
| `bane` | Bane | the Black Hand | Tyrant's Nemesis |
| `shar` | Shar | Mistress of the Night | Light in the Dark |

True God bosses scale at +55–65 HP per participant. Legendary item drop chance: 18–25%.

::: warning Defeat
If the boss is not killed within 10 minutes, the invasion ends in defeat. No rewards are granted. The realm suffers the consequences.
:::

::: tip No Permadeath
Counterattack damage cannot kill you. Invasions are dangerous, not fatal — you won't lose your character by answering the call.
:::
