# Introduction

Hello dear reader,

ZulkirBot started as an idea I had been sitting on for a long time — a text-based MUD running entirely inside Twitch chat. No client to download, no account to create, no setup. Just type a command and you are in the world.

I have always loved MUDs. The way they put an entire world inside plain text, where your imagination fills in everything the screen does not show you. I wanted to bring that feeling into a live stream, where the world is shared, the fights are public, and everyone in chat is either watching someone die or dying themselves.

## What It Took

Building ZulkirBot meant solving problems I did not fully anticipate when I started and something small turned into a huge project that I have had fun with throughout. The bot runs on TypeScript and Node.js, talks to Twitch chat through tmi.js, and uses Supabase to persist every character, every item, every death, and every gold piece. Two bot accounts — ZulkirBot and ZulkirJax — keep things running across channels.

The RPG system grew from a simple fight command into something with 25 playable classes, a full equipment system across 13 slots, a shop, a bank, a tavern with drinks and meals that actually buff your character, party and raid mechanics, PvP dueling, rogue skill checks, spellcasting, a prestige system, a graveyard for the fallen, and a campaign mode with named adventures pulled from D&D settings I grew up with.

Every one of those systems had to work inside the constraints of chat — no UI, no click targets, just commands and bot responses that had to be clear enough that a viewer could follow along without reading a manual.

## The World

The campaigns in ZulkirBot pull from settings like Greyhawk, the Forgotten Realms, Ravenloft, Dark Sun, Planescape, Spelljammer, and more. The Greyhawk Arc alone runs five connected campaigns from Hommlet through Against the Giants. These are settings and adventures I have spent years playing in, reading about, and loving. Getting to build a game inside them — even a small text-based one — has been genuinely satisfying.

## For the Players

If you are reading this, you are probably a viewer on [zulkirjax on Twitch](https://twitch.tv/zulkirjax), and I hope you get a lot out of this bot. Die dramatically. Reach prestige. Grind a title no one else has. Form a party and wipe the boss out anyway!

Thank you to those who have suggested ideas, done some quality assurance for me while in chat, and those whom have complimented the work and the game. I appreciate you all, because...

The bot exists because of you, the chat. I hope it shows.
