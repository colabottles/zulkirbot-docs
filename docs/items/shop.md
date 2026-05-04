# The Shop

## !shop

Browse the item shop. Stock rotates every hour automatically. A warning fires in chat 3 minutes before the stock changes.

Buy items with gold earned from combat, exploration, and daily rewards.

> [!NOTE]
> `!shop` only shows bot-stocked items. To browse items listed by other players, use `!listings`.

## Player Marketplace

Players can list their own items for sale to other players.

| Command | Description |
| --- | --- |
| `!listsaleitem [item name] [price]` | List an item from your inventory for sale. Costs 10gp to list. Max 5 active listings. Expires after 24 hours. |
| `!pbuy [username] [item name]` | Purchase an item from another player's listing. |
| `!removelisting [item name]` | Remove your own listing and return the item to your inventory. |
| `!listings` | View all active player listings with item, rarity, price, and seller. |

::: tip
ℹ️ Price caps apply. Items bought from the shop cannot be listed above their purchase price. Items found or dropped cannot be listed above 80% of base rarity value (common 8gp, uncommon 24gp, rare 48gp, legendary 120gp).
:::

::: warning
⚠️ The 10gp listing fee is non-refundable even if the item does not sell.
:::

## Auction House

One item can be auctioned at a time. Auctions run until the broadcaster closes them with `!endauction`.

| Command | Description |
| --- | --- |
| `!listauction [item name] [starting bid]` | List an item for auction. Free to list. Item is removed from your inventory immediately. |
| `!bid [amount]` | Place a bid on the active auction. Must exceed the current bid. Gold is deducted immediately. |
| `!auctions` | View the current auction, item details, and high bid. |
| `!endauction` | Broadcaster only. Closes the auction and awards the item to the highest bidder. |

::: tip
ℹ️ If you are outbid, your gold is returned to you immediately.
:::

::: warning
⚠️ If no bids are placed when `!endauction` is called, the item is returned to the seller.
:::
