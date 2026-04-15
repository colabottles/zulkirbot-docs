# ZulkirBot Release Notes

---

## Campaigns

The Shadowdale Gauntlet is a channel-wide event — five stages of escalating combat ending in a named boss from D&D and Forgotten Realms lore. One campaign can be run per day. Win or lose, the cooldown is spent.

## Starting a Campaign

Type `!campaign` to begin. You will be prompted to choose a mode.

```plaintext
!campaign    → initiates the campaign, prompts for solo or party
!solo        → start immediately as a solo adventurer
!joincamp    → join a party forming window (party mode only)
```

After typing `!campaign`, you have **30 seconds** to respond with `!solo` or `!joincamp`. If no response is given, the campaign starts in solo mode automatically.

## Solo vs. Party

**Solo** — the campaign begins immediately with just you. All rewards go to you if you survive.

**Party** — a 60-second join window opens. Any viewer can type `!joincamp` to enter. Once the window closes, the campaign begins with everyone who joined. There is no minimum or maximum party size beyond the initiator.

## The Five Stages

Rest shrines appear before stages 2 through 5, restoring **20 HP** to all living players before the next fight begins.

| Stage | Name | Notes |
| --- | --- | --- |
| 1 | Skirmish | One or two weak enemies. Intro flavor text. |
| 2 | Ambush | Two enemies. Dual attacks. |
| 3 | Patrol | Tougher single enemy with a named special ability. |
| 4 | Elite Guard | Near-boss tier. Uses a power move or debuff at round 2. |
| 5 | Minor Boss | Named villain. High HP. Named special attack. Unique loot. |

## Combat

Combat is round-based. Each living player attacks in turn, then enemies counter. Special abilities and boss attacks fire at round 2. A maximum of 8 rounds per stage prevents stalling — any enemy still standing after round 8 is routed.

## Death

Death is **permanent for the duration of the campaign.** If your HP reaches 0 during any stage, you are eliminated. You cannot rejoin.

- **Solo:** one death ends the campaign immediately.
- **Party:** surviving members continue. The campaign only ends in defeat when all players are dead.

If the campaign ends in defeat, the daily cooldown is still consumed. The channel cannot run another campaign until the next day.

## Boss Pool

The boss is drawn randomly at campaign start from a pool of 18 named villains rooted in D&D and Forgotten Realms lore, including servants of Szass Tam, Bane, Cyric, Shar, and Velsharoon among others. Each boss has a unique named special attack and intro flavor text.

## Rewards

Rewards are calculated per player based on how far they survived.

| Reward | Who receives it |
| --- | --- |
| XP (50–300, scaling per stage) | All players, for stages survived |
| Gold (20–120, scaling per stage) | All players, for stages survived |
| Full clear bonus (+250 XP, +100 gold) | Survivors of all 5 stages only |
| Unique title | All survivors of the full clear |
| Minor artifact | One random survivor of the boss fight |

### Stage XP and Gold

| Stage | XP | Gold |
| --- | --- | --- |
| 1 | 50 | 20 |
| 2 | 100 | 40 |
| 3 | 150 | 60 |
| 4 | 200 | 80 |
| 5 (Boss) | 300 | 120 |
| Full clear bonus | +250 | +100 |
| **Total (full clear)** | **1,050** | **320** |

### Titles

Titles are drawn randomly from a pool of 10 on full clear. Examples include *Gauntlet Breaker*, *Crypt Clearer*, *The Undying*, and *Bane's Bane*.

### Artifacts

One minor artifact drops from the boss and is awarded to a random surviving player. Artifacts are drawn from a pool of 12, including items such as the *Shard of the Pale Crown*, *Veilborn Amulet*, and *Revenant's Brand*.

## Cooldown

One campaign per channel per day. The cooldown is enforced regardless of outcome.

::: warning Permadeath
If you die during a campaign, you are out for the rest of that run. There is no revival. Use `!rest` between normal sessions to keep your HP healthy before a campaign begins.
:::

## v1.4.1 — April 13, 2026

### Improvements v1.4.1

#### Giveaway

`!setcode` now reminds chat that viewers must follow and whisper at `@ZulkirBot` before the giveaway starts to be eligible for prize delivery.

## v1.4.0 — April 13, 2026

### Bug Fixes v1.4.0

#### Permadeath + Flee race condition

Fixed an issue where a player who died in combat could still trigger the `!flee` command. The flee handler now checks the database to confirm the character exists before proceeding, and cleans up any stale fight state.

#### Tavern Brawl fizzle reset

Fixed an issue where `!brawl` could not be started again after a brawl fizzled out due to insufficient participants. `tavernVisitors` is now cleared on brawl cancel and brawl end, and the triggering player is now added via `addParticipant` instead of a direct array push.

#### Weekly reward double-write

Fixed a race condition in `!weekly` where two separate database writes were made, leaving the character in an inconsistent state if the bot restarted between them. Now uses a single atomic update. Also fixed the level-up message not appearing in the weekly reward chat response.

#### Party raid XP missing level recalc

Fixed an issue where defeating a raid boss granted XP to party members but never recalculated or updated their level, causing level/XP desync. Party members now correctly level up after a successful raid.

#### Duplicate item stat negation

Two equipped items with the same name no longer stack stat bonuses. Only the first equipped instance counts toward stats. Players are warned in chat when equipping a duplicate item that the second copy provides no bonus.

### Improvements v1.4.0

#### Equip command

Players can no longer equip an item that is already equipped, preventing the same item from occupying two slots.

#### Code Quality

Removed unused `tmi` import from `flee.ts`
Removed unused `formatClass` import from `party.ts`
Removed unused `getPartyById` import from `party.ts`
Replaced dynamic `await import()` calls in `party.ts` with static top-level imports for `calculateLevel` and `CLASS_HP`

## v1.3.0 — April 12, 2026

### Prestige System

- Added `!prestige` command — available at Level 40 for 1,000g
- Five prestige ranks: Epic I through Epic V
- Each prestige grants +10 permanent max HP
- Prestige badge displays in `!status`
- Players keep all gold, inventory, and bank vault on prestige

### XP Curve Overhaul

- Replaced flat XP thresholds with a BECMI-inspired curve
- Early levels (1-8) progress quickly and reward new players
- High levels (10-40) require serious dedication
- Level 40 now caps at 9,400,000 XP

### Documentation Site

- Launched ZulkirBot Docs at zulkirbot-docs.netlify.app
- Built with VitePress
- Full command reference, XP table, prestige guide, and more
- Cinzel Decorative headings, Grenze body text, #7B0005 brand color

---

## v1.2.0 — April 12, 2026

### Tavern Brawl

- Tavern brawls now trigger randomly at 15% chance when a player buys a drink or meal
- 30 second join window — type `!brawl` to enter
- Minimum 2 players required to start
- Free-for-all combat — last one standing wins
- Rewards scale with number of participants (15g + 10 XP per fighter)
- Losers drop to 0 HP — use `!rest` to recover

### Tavern Improvements

- Added `!drinks` command — standalone drink menu
- Added `!meals` command — standalone meal menu
- Added `!barkeep` — random barkeep quotes and tips (requires purchase)
- Added `!rumour` — random flavour text and gameplay hints (requires purchase)
- Replaced three-message tavern menu with single welcome message
- Added tavern session tracking — commands unlock after first purchase
- Updated `Traveler's Bread and Cheese` to `Primus's Poutine-a-Plenty`
- Updated `Mushroom Risotto` to `Manshoon's Mushroom Risotto`
- Updated `Halfling Pie` to `Athas Halfling Pie`
- Updated `Spiced Lamb Skewers` to `Sembian Spiced Lamb Skewers`

### Barkeep Names

Barkeep now randomly selects from a roster of DDO streamer names: Tavern Tails, JackDrag0n, Ysukai, NeutralAgent, Brakkart, Tuf_RPG, codiene42, guppyczar, Noobahlolic, Nachowench, and Bobhorn Leghorn.

---

## v1.1.0 — April 11, 2026

### Bank System

- Added `!bank deposit [item]` — deposit unequipped items into vault
- Added `!bank depositall` — deposit all unequipped items at once
- Added `!bank withdraw [item]` — retrieve items from vault
- Added `!bank list` — view vault contents
- 50 slots per player
- Bank is wiped on permadeath (cascading delete via Supabase)

### Selling Improvements

- Added `!sell all` — sell all unequipped, non-cursed items at once
- Added d100 lucky roll for Rare and Legendary items — roll 75+ for double payout
- Updated sell prices: Common 10g, Uncommon 30g, Rare 60g, Legendary 150g

### Giveaway Improvements

- Game commands now pause automatically when `!setcode` is used
- Game resumes automatically when `!stop giveaway` is run
- Added broadcaster reminder to run `!stop giveaway` after `!draw`
- Fixed giveaway timer — entries now correctly persist after `!ddo`
- Fixed "giveaway giveaway" double word in prize name display
- Fixed "1 entries" grammar — now correctly shows "1 entry"

### Duel Fixes

- Fixed loser HP — now correctly set to 0 (not 1) after a duel loss
- Fixed double message bug — win message no longer fires twice
- `upsertDuelStat` now correctly called for both winner and loser after every duel

---

## v1.0.1 — April 11, 2026

### Bug Fixes v1.0.1

- Fixed ZulkirJax duplicating bot messages in chat — caused by ZulkirJax being logged in while bot was running
- Fixed `!start giveaway` not persisting state to `!ddo` command
- Fixed shop rotation timer resetting on bot restart

### Startup Guide

- Generated printable ZulkirBot Startup & Recovery Guide PDF
- Covers prerequisites, startup steps, environment variables, token refresh, and quick reference
- Styled in ZulkirBot dark purple theme

---

## v1.0.0 — Initial Release

### Core RPG System

- Character creation with `!join` — 25 available classes
- Combat system with `!fight`, `!attack`, `!flee`
- Exploration with `!explore`, `!rest`, `!shrine`
- Inventory management — `!inventory`, `!equip`, `!unequip`, `!use`, `!drop`
- Item shop with hourly rotation — `!shop`
- Leveling system with XP and gold rewards
- Permadeath — characters deleted on death, recorded in `!graveyard`

### PvP Dueling

- Challenge system with `!duel`, `!accept`, `!decline`
- Turn-based combat with `!strike`
- Initiative roll to determine first turn
- Winner earns 50 XP
- PvP leaderboard with `!pvpboard`

### Party & Raids

- Party system — create, join, leave, status
- Raid system — turn-based boss fights with party
- XP and gold distributed by damage dealt
- Rare loot drops for all survivors
- 5% chance of legendary boss item drop

### Tavern

- Drink menu with combat buffs
- Meal menu with HP restoration
- Roulette gambling with `!gamble`

### Title System

- Titles earned by slaying monsters
- Set and display active title in `!status`

### Daily & Weekly Rewards

- `!daily` — up to 100g every 24 hours
- `!weekly` — up to 2,000 XP + rare item chance every 7 days

### Giveaway System

- `!setcode` — load prize code
- `!start giveaway` — start giveaway with 5 minute timer
- `!ddo` — enter giveaway
- `!draw` — pick winner and whisper prize code
- `!stop giveaway` — reset giveaway state

### Bot Infrastructure

- tmi.js Twitch chat integration
- Supabase backend
- Token refresh every 12 hours
- Shop rotation every hour
- Two bot accounts: ZulkirBot and ZulkirJax
