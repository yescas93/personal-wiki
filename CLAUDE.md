# CLAUDE.md — Personal Wiki

## Project overview
VitePress-based personal wiki for Alex Yescas. Content lives in `docs/` as Markdown files.
Hosted on Cloudflare Pages, auto-deployed on every push to GitHub.

---

## Content structure

```
docs/
├── index.md            ← Site homepage
├── hobbies/index.md    ← Hobbies category landing page
├── books/index.md      ← Books category landing page
└── travel/index.md     ← Travel category landing page
```

- **Category** = a subfolder inside `docs/` with its own `index.md`
- **Page within a category** = any other `.md` file inside that subfolder

### Adding a new page within a category
1. Create `docs/<category>/<page-name>.md`
2. Add a sidebar entry in `.vitepress/config.js` under the matching category block:
   ```js
   { text: 'Page Title', link: '/<category>/<page-name>' }
   ```

### Adding a new category
1. Create `docs/<category>/index.md`
2. Add a new sidebar group in `.vitepress/config.js`:
   ```js
   {
     text: 'Category Name',
     items: [
       { text: 'Overview', link: '/<category>/' },
     ],
   },
   ```

---

## Dev server

```bash
npm run docs:dev
```

Running inside WSL — the server binds to `0.0.0.0` (configured via `vite.server.host: true`).
Open in Windows browser at `http://<WSL-IP>:5173`.
Find WSL IP with: `ip addr show eth0 | grep 'inet '`

---

## Build & deploy

```bash
npm run docs:build     # outputs to docs/.vitepress/dist
npm run docs:preview   # preview the production build locally
```

Push to GitHub → Cloudflare Pages auto-deploys.
- Build command: `npm run docs:build`
- Output directory: `docs/.vitepress/dist`
