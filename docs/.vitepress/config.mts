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
          { text: 'Introduction', link: '/intro' },
          { text: 'Creating a Character', link: '/getting-started' },
        ]
      },
      {
        text: 'Combat',
        items: [
          { text: 'Fighting', link: '/combat/fighting' },
          { text: 'PvP Dueling', link: '/combat/dueling' },
          { text: 'Rogue Skills', link: '/combat/rogue-skills' },
          { text: 'Spells', link: '/combat/spells' },
        ]
      },
      {
        text: 'Items & Economy',
        items: [
          { text: 'Inventory', link: '/items/inventory' },
          { text: 'The Shop', link: '/items/shop' },
          { text: 'The Bank', link: '/items/bank' },
          { text: 'Selling Items', link: '/items/selling' },
          { text: 'Flavor Commands', link: '/items/flavor' },
        ]
      },
      {
        text: 'The Tavern',
        items: [
          { text: 'Tavern', link: '/tavern/tavern' },
          { text: 'Tavern Brawl', link: '/tavern/brawl' },
          { text: 'Hirelings', link: '/tavern/hirelings' },
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
          { text: 'The Dying Star', link: '/campaigns/spelljammer' },
          { text: 'Embers of the Second War', link: '/campaigns/planescape' },
          { text: 'The Shattered Memory of Darkon', link: '/campaigns/ravenloft' },
          { text: 'The Ritual of Nibenay', link: '/campaigns/darksun' },
          { text: 'The Whispering Flame', link: '/campaigns/eberron' },
          { text: 'The Black Emperor', link: '/campaigns/dragonlance' },
          { text: 'The Smiling Tyrant', link: '/campaigns/greyhawk' },
          { text: 'The Tyrant Reforged', link: '/campaigns/forgotten-realms' },
          { text: 'The Lich King of Thay', link: '/campaigns/thay' },
          {
            text: 'Greyhawk Arc',
            items: [
              { text: 'The Village of Hommlet', link: '/campaigns/greyhawk-arc/hommlet' },
              { text: 'The Temple of Elemental Evil', link: '/campaigns/greyhawk-arc/temple' },
              { text: 'Scourge of the Slave Lords', link: '/campaigns/greyhawk-arc/slavers' },
              { text: 'Against the Giants', link: '/campaigns/greyhawk-arc/giants' },
              { text: 'Queen of the Spiders', link: '/campaigns/greyhawk-arc/spiders' },
            ]
          },
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