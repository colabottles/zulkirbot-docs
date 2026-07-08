# NPC Encounters

During `!explore`, there is a 5% chance of encountering an NPC. NPCs are randomly friendly, hostile, or neutral.

## Friendly NPCs (40% of encounters)

### Travelling Merchant

A merchant steps from the shadows with 6 items for sale at uncommon or rare rarity, priced at a 15% markup over shop prices.

Type `!buyfrommerchant [number]` (or `!bfm [number]`) within 60 seconds to purchase.

!buyfrommerchant 3

The merchant moves on after 60 seconds or after a purchase.

### Wandering Adventurer

A fellow adventurer offers to trade one of their items for one of yours.

Type `!tradeitem [item name]` (or `!ti [item name]`) within 60 seconds to trade an unequipped item from your pack.

!tradeitem worn gloves

### Hermit Sage

A hermit materializes and shares a piece of gameplay wisdom. No interaction required — you receive **+50 XP** and the hint automatically.

## Hostile NPCs (30% of encounters)

### Mugger

A cloaked figure robs you of **15% of your current gold** before you can react. No command to avoid it.

### Rival Adventurer

A rival blocks your path and demands your pack. This triggers a full fight using the standard combat engine. Type `!attack` to fight back.

## Neutral NPCs (30% of encounters)

A stranger passes by and delivers one of 30 flavor quotes. No mechanical effect — purely for atmosphere.

## Commands

| Command | Alias | Use |
| --- | --- | --- |
| `!buyfrommerchant [number]` | `!bfm` | Buy from travelling merchant |
| `!tradeitem [item name]` | `!ti` | Trade with wandering adventurer |
