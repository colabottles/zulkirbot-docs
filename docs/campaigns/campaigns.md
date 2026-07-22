---
title: Campaigns
description: The Shadowdale Gauntlet — solo and party PvE campaign system
---

## Campaigns

`!campaign` starts a run through the **Shadowdale Gauntlet** — a five-stage PvE gauntlet ending in a boss fight. You can run it alone or with a party.

### Starting a campaign

```plaintext
!campaign
```

You'll be asked to choose a mode:

```plaintext
!solo
!party
```

You have 60 seconds to choose. If you don't respond in time, it defaults to solo.

Only one campaign setup can be in progress per user at a time — if you type `!campaign` again while still deciding solo/party, the bot will tell you to finish choosing first rather than starting a second one.

### Blocked from starting

You can't start a campaign if:

- You don't have a character yet (use `!join` first)
- Your character is dead (use `!join` to start over)
- You're already in an active party campaign

## Solo mode

```plaintext
!solo
```

You take on all five stages alone. The campaign is scaled to your character's level. If you've rented a [hireling](/hirelings), it joins you automatically — no extra command needed, it just shows up in the intro message and fights alongside you for the run.

## Party mode

```plaintext
!party
```

Opens a 60-second join window:

```plaintext
!joincamp
```

Anyone with a living character can join during that window. Once it closes, the party is locked in and the campaign is scaled to the average level of everyone who joined. Hirelings are solo-only and don't carry over into party runs.

## How a run plays out

Each campaign has five stages plus a boss fight:

1. **Stages 1–4** — scaled enemy encounters (goblins, kobolds, orc patrols, and an elite shadowguard with a random elite power on stage 4)
2. **Rest shrines** — between stages, the party heals a flat amount of HP; hireling companions heal here too
3. **Stage 5 — boss fight** — a boss drawn from the boss pool, scaled up in HP and damage

During combat, when it's your turn you'll be prompted:

```plaintext
!attack
```

You have about 8 seconds to respond before your turn is skipped. Enemies pick a random living target each round — that can be you, a party member, or (in solo mode) your hireling.

If everyone in the party goes down, the campaign ends in defeat and no rewards are paid out for that run. If you clear all five stages, everyone alive at the end gets a full clear bonus.

## Rewards

Rewards are calculated per stage reached and paid out to real characters only — hirelings never receive XP, gold, titles, or artifacts.

- **XP and gold** scale with how far you got, even if you didn't finish
- **Full clear bonus** — extra XP and gold for everyone who survives to the end
- **Title** — one title is drawn and awarded to all survivors on a full clear
- **Artifact** — one random survivor gets a legendary artifact drop on a full clear
- **Motes** — survivors of a full clear also gain a mote

## Special encounters

Some campaigns include a mid-run event where **Galenus** appears at a randomly rolled stage. This is separate from the standard stage encounters and can occur on any run, solo or party.

## Other campaign settings

`!campaign` runs the standard Shadowdale Gauntlet, but it isn't the only named campaign that's been run on stream. Earlier campaign settings include:

- **Mystara**
- **Al-Qadim / Zakhara**
- **Kara-Tur**
- **Greyhawk Arc** — five sequential named campaigns run as a connected series
These were earlier setting-specific campaigns rather than variants of the current `!campaign` command, and aren't selectable through `!solo`/`!party` today. This page documents the current Shadowdale Gauntlet system; the earlier settings are noted here for continuity with past streams.

## Related

- [Hirelings](/hirelings) — renting NPC help for solo runs
