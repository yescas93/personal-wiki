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
        text: 'Engineering',
        collapsed: true,
        items: [
          { text: 'Overview',   link: '/engineering/' },
          { text: 'Mechanical', link: '/engineering/mechanical/' },
          { text: 'Computer',   link: '/engineering/computer/' },
          { text: 'Electrical', link: '/engineering/electrical/' },
        ],
      },
      {
        text: 'Home Improvement',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/home-improvement/' },
          { text: 'Builds',   link: '/home-improvement/builds/' },
          { text: 'Projects', link: '/home-improvement/projects/' },
        ],
      },
      {
        text: 'Stories',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/stories/' },
          { text: 'Movies',   link: '/stories/movies/' },
          { text: 'Shows',    link: '/stories/shows/' },
          { text: 'Anime',    link: '/stories/anime/' },
          { text: 'Manga',    link: '/stories/manga/' },
          { text: 'Poem',     link: '/stories/poem/' },
          { text: 'Journal',  link: '/stories/journal/' },
        ],
      },
      {
        text: 'Music',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/music/' },
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
