# ZulkirBot Docs

Documentation site for ZulkirBot — a text-based RPG played entirely in Twitch chat on [zulkirjax](https://twitch.tv/zulkirjax).

Built with [VitePress](https://vitepress.dev/).

## Overview

ZulkirBot is a D&D-inspired chat bot where viewers can create characters, fight monsters, find loot, level up, and try not to die permanently — all through Twitch chat commands.

This site documents all available commands, game mechanics, and systems.

## Local Development

**Requirements:** Node.js v20 or higher

```bash
# Install dependencies
npm install

# Start local dev server
npm run docs:dev
```

The site will be available at `http://localhost:5173/`.

## Building for Production

```bash
npm run docs:build
```

Output is written to `docs/.vitepress/dist/`.

## Deployment

The site is deployed to Netlify. Build settings:

| Setting | Value |
| --- | --- |
| Build command | `npm run docs:build` |
| Publish directory | `docs/.vitepress/dist` |

## Project Structure

zulkirbot-docs/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts       # VitePress config, nav, sidebar
│   │   └── theme/
│   │       ├── index.ts     # Theme entry point
│   │       ├── custom.css   # Brand colors, fonts, overrides
│   │       └── custom.d.ts  # CSS module type declaration
│   ├── combat/
│   ├── items/
│   ├── tavern/
│   ├── progression/
│   ├── social/
│   ├── getting-started.md
│   ├── giveaways.md
│   └── index.md             # Home page
├── netlify.toml
└── package.json

## Tech Stack

- [VitePress](https://vitepress.dev/) — static site generator
- [Netlify](https://netlify.com/) — hosting
- Fonts: Cinzel Decorative (headings), Grenze (body)

## Related Projects

- [ZulkirBot](https://github.com/colabottles/zulkirbot) — the bot itself
- [zulkirjax on Twitch](https://twitch.tv/zulkirjax) — the stream
