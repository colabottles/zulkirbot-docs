import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ZulkirBot",
  description: "Text-based RPG for Twitch chat on zulkirjax",
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark-high-contrast',
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Commands', link: '/getting-started' },
      { text: 'Watch on Twitch', link: 'https://twitch.tv/zulkirjax' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Creating a Character', link: '/getting-started' },
        ]
      },
      {
        text: 'Combat',
        items: [
          { text: 'Fighting', link: '/combat/fighting' },
          { text: 'PvP Dueling', link: '/combat/dueling' },
        ]
      },
      {
        text: 'Items & Economy',
        items: [
          { text: 'Inventory', link: '/items/inventory' },
          { text: 'The Shop', link: '/items/shop' },
          { text: 'The Bank', link: '/items/bank' },
          { text: 'Selling Items', link: '/items/selling' },
        ]
      },
      {
        text: 'The Tavern',
        items: [
          { text: 'Tavern', link: '/tavern/tavern' },
          { text: 'Tavern Brawl', link: '/tavern/brawl' },
        ]
      },
      {
        text: 'Progression',
        items: [
          { text: 'Leveling', link: '/progression/leveling' },
          { text: 'XP Table', link: '/progression/xp-table' },
          { text: 'Prestige', link: '/progression/prestige' },
          { text: 'Titles', link: '/progression/titles' },
        ]
      },
      {
        text: 'Social',
        items: [
          { text: 'Party & Raids', link: '/social/party' },
          { text: 'Leaderboards', link: '/social/leaderboards' },
          { text: 'The Graveyard', link: '/social/graveyard' },
        ]
      },
      {
        text: 'Campaigns',
        items: [
          { text: 'The Gauntlet', link: '/campaigns/gauntlet' },
          { text: 'The Crystal of Rafiel', link: '/campaigns/mystara' },
          { text: 'The Seal of the Incomparable', link: '/campaigns/alqadim' },
          { text: 'Ashes of Xaryxis', link: '/campaigns/spelljammer' },
          { text: 'Embers of the Second War', link: '/campaigns/planescape' },
          { text: 'The Shattered Memory of Darkon', link: '/campaigns/ravenloft' },
        ]
      },
      {
        text: 'NPCs',
        items: [
          { text: 'Brother Yvannis', link: '/npcs/yvannis' },
        ]
      },
      {
        text: 'Giveaways',
        items: [
          { text: 'Giveaways', link: '/giveaways' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'twitch', link: 'https://twitch.tv/zulkirjax' }
    ],
    footer: {
      message: 'ZulkirBot — zulkirjax on Twitch'
    }
  }
})