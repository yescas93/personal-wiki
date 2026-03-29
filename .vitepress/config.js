import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Alex's Wiki",
  description: "Personal notes, interests, and curiosities",
  base: '/',

  themeConfig: {
    siteTitle: "Alex's Wiki",

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
