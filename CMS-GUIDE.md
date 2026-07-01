# Konect site — editing content (Keystatic CMS)

The site now has a built-in **control panel** at **`/keystatic`**. Everything below
is editable there — no code needed.

## What's editable

| Section | What you can change |
|---|---|
| **Projects / Case studies** | Add/edit/remove case studies — name, industry, location, year, stats, summary, the challenge/solution/result write-up, key facts, a hero photo, an extra **photo gallery**, and which services were used. |
| **Services** | The 8 services — name, one-line description, **showcase photo**, SEO keywords. |
| **Clients (logos)** | The client logo wall — add a client + upload its logo, set the order (recognisable brands lead the marquee). |
| **Testimonials** | Committee quotes — quote, role, area. |
| **Company & contact details** | Name, phone, WhatsApp, email, hours, address, Google Maps links, Facebook, Web3Forms key. |
| **Headline stats** | The 400+/300+/200+/16+ counters. |
| **Homepage hero** | Badge, headline, sub-headline, and the 3 photos in the hero strip. |
| **Industries** | The six industry cards (name, icon, one-line stat, optional **photo**); drag to reorder, add or remove. |

> Still in code (rarely changed, ask the developer): the top navigation, the
> service-showcase photos on the `/services` page, and the AMC "Why us" list.

---

## How it works (important)

This is a **git-based** CMS. When you hit **Publish** in `/keystatic`, your change
is **saved into the website's code on GitHub**, which **automatically rebuilds and
republishes** the live site. A change is live in **~1–2 minutes** (not instant).

That means the panel is **free** (no monthly CMS fee) and you fully own the content.

---

## Editing locally (developer)

```bash
npm run dev      # then open http://localhost:3100/keystatic
```

Edits write to the JSON files in `src/content/`. A small script
(`scripts/build-content.mjs`) turns those into `src/lib/content-data.ts`, which the
site reads. It runs automatically before `npm run dev` and `npm run build`.

---

## Going LIVE-editable (one-time setup — needs a GitHub account)

Right now Keystatic is in **local mode** (edits only work on a developer's machine).
To let the client edit the **live** site, do this once:

### 1. Put the site on GitHub
- Create a GitHub repository (e.g. `konect-website`).
- Push this project to it.

### 2. Connect GitHub to Vercel (so edits auto-deploy)
- In the Vercel project (`konect-v1`) → **Settings → Git** → connect the GitHub repo.
- From now on, deploys happen on every push (the Keystatic publish = a push).
  *(You'll no longer need `vercel deploy` from the terminal.)*

### 3. Switch Keystatic to GitHub storage
In `keystatic.config.ts`, change:
```ts
storage: { kind: "local" },
```
to:
```ts
storage: {
  kind: "github",
  repo: { owner: "YOUR_GITHUB_USERNAME", name: "konect-website" },
},
```

### 4. Authorise the Keystatic GitHub App
- Visit `https://your-live-domain/keystatic` and click **Connect** — it installs a
  Keystatic GitHub App and logs you in with GitHub.
- Give the owner (the dad) access by adding him as a **collaborator** on the repo.

> **Editor login = a GitHub account.** If a GitHub login is too much friction for a
> non-technical editor, use **Keystatic Cloud** (free tier) instead — it gives a
> simpler email login and hosts uploaded images. See https://keystatic.com/docs/cloud.

### 5. Done
The owner opens `your-domain/keystatic`, edits, hits **Publish**, and the live site
updates in a minute or two.

---

## Notes
- **Images** uploaded in the panel are saved into `public/images/...` in the repo.
- **URL slugs** (e.g. `/projects/raheja-imperia`) come from each entry — avoid
  changing an existing slug or its old link will break.
- The site is no longer a static export; it runs as a normal Next.js app on Vercel
  (required for the admin panel). Marketing pages are still pre-rendered/fast.

## Current live setup (already configured — supersedes steps 1–5 above)
- Repo: `github.com/jarvisdiscord-bot/konect-website` → Vercel auto-deploys on push.
- Editor auth: **Keystatic Cloud** (`konect/konect-website`), not the GitHub App.
  Invite editors in the Keystatic Cloud dashboard → **Team → Invite** (email).
- `keystatic.config.ts` uses local files in dev, Keystatic Cloud in production.

## Analytics & Search Console (optional — set in Vercel → Environment Variables)
- `NEXT_PUBLIC_GA_ID` — a Google Analytics 4 measurement id (`G-XXXXXXX`); when set,
  GA loads on every page. Leave unset to disable analytics entirely.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — the token from Google Search Console's
  "HTML tag" verification method (adds the verification `<meta>` tag).
- After adding either, redeploy. The sitemap is already served at `/sitemap.xml`
  (submit it in Search Console); `/keystatic` and `/api` are excluded from indexing.
