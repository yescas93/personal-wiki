import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Alex's Wiki",
  description: "Personal notes, interests, and curiosities",
  base: '/',
  appearance: 'force-dark',

  themeConfig: {
    siteTitle: 'alex@wiki:~$',

    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Hobbies',
        items: [
          { text: 'Overview', link: '/hobbies/' },
        ],
      },
      {
        text: 'Books',
        items: [
          { text: 'Overview', link: '/books/' },
        ],
      },
      {
        text: 'Travel',
        items: [
          { text: 'Overview', link: '/travel/' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [],
  },

  vite: {
    server: {
      host: true,
    },
  },
})
