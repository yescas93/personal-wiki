# Personal Wiki — Handoff Document

> Copy-paste this into a new Claude Code instance opened at `~/Projects/personal-wiki/`.
> That instance will have its own `CLAUDE.md` and skills file to tailor behavior further.

---

## Project Summary
Build a personal wiki website for Alex Yescas to document and curate personal interests.
- Edit content by writing `.md` files directly (no web UI editor needed)
- Clean docs style: sidebar navigation, full-text search, dark mode
- Hosted publicly at a custom `.xyz` domain (e.g. `yescas.xyz` or `wiki.yescas.xyz`)
- Auto-deploys on every `git push`

---

## Stack Decisions

| Layer | Choice | Notes |
|-------|--------|-------|
| Site generator | **VitePress** | Markdown-first, zero-config, sidebar + search + dark mode built in |
| Hosting | **Cloudflare Pages** (free) | Auto-deploy from GitHub, custom domain support, fast CDN |
| Source control | **GitHub** (new repo) | Triggers Cloudflare rebuild on push |
| Domain | **`.xyz` TLD** (~$1–3/yr at Porkbun) | Cheapest real custom domain option |

---

## Folder Structure to Scaffold

```
personal-wiki/
├── docs/
│   ├── index.md           ← Home page (welcome + category links)
│   ├── hobbies/
│   │   └── index.md
│   ├── books/
│   │   └── index.md
│   ├── travel/
│   │   └── index.md
│   └── (user adds more folders/pages freely)
├── .vitepress/
│   └── config.js          ← Sidebar, title, search, theme config
├── package.json
├── .gitignore
└── CLAUDE.md              ← Project-specific instructions for this instance
```

---

## Implementation Steps

### Step 1 — Install dependencies
```bash
npm init -y
npm install -D vitepress
```

### Step 2 — Configure `.vitepress/config.js`
- `title`: "Alex's Wiki" (or similar)
- `description`: personal wiki tagline
- `sidebar`: top-level categories (Hobbies, Books, Travel, etc.)
- `search: { provider: 'local' }` — full-text search, zero config
- `base: '/'`
- **WSL fix** — add this so the dev server is reachable from Windows browser:
  ```js
  vite: { server: { host: true } }
  ```

### Step 3 — Seed starter content
Create `docs/index.md` homepage with a welcome message and links to each category.
Create one `index.md` per category (Hobbies, Books, Travel) with placeholder content.

### Step 4 — npm scripts in `package.json`
```json
"scripts": {
  "docs:dev":     "vitepress dev docs",
  "docs:build":   "vitepress build docs",
  "docs:preview": "vitepress preview docs"
}
```

### Step 5 — Git setup
```bash
git init
echo "node_modules\ndocs/.vitepress/dist\ndocs/.vitepress/cache" > .gitignore
git add .
git commit -m "Initial wiki scaffold"
```
Then user creates a GitHub repo and pushes:
```bash
git remote add origin <github-repo-url>
git push -u origin main
```

### Step 6 — Cloudflare Pages (user does in browser)
1. cloudflare.com → Pages → Create project → Connect GitHub repo
2. Build command: `npm run docs:build`
3. Output directory: `docs/.vitepress/dist`
4. Deploy → get free `*.pages.dev` URL immediately

### Step 7 — Custom domain (user buys & connects)
1. Register a `.xyz` domain at **Porkbun** (~$1–3/yr first year)
   - Suggestions: `yescas.xyz`, `alexwiki.xyz`, `yescasnotes.xyz`
2. In Cloudflare Pages → Custom domains → add the domain
3. Follow DNS instructions (point nameservers to Cloudflare, or add CNAME record)
4. HTTPS is automatic — no configuration needed

---

## Verification Checklist
- [ ] `npm run docs:dev` starts without errors
- [ ] Open `http://<WSL-IP>:5173` in Windows browser — site loads
- [ ] Sidebar navigation works between pages
- [ ] Search bar returns results
- [ ] Dark mode toggle works
- [ ] Add a new `.md` file → browser hot-reloads instantly
- [ ] `npm run docs:build` completes without errors
- [ ] After `git push` → Cloudflare Pages auto-deploys (check Pages dashboard)

---

## CLAUDE.md to Create for This Project
The new Claude Code instance should create a `CLAUDE.md` at the project root covering:
- How pages are organized (folder = category, `index.md` = category landing page)
- How to add a new category vs. a new page within a category
- How to update the sidebar in `.vitepress/config.js` when adding pages
- Dev server command and WSL browser URL note
- Build + deploy workflow (push to GitHub → auto-deploys)
