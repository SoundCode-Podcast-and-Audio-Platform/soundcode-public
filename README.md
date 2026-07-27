# SoundCode Public

Static public site for the SoundCode landing page plus FAQ, Terms, Privacy, Creator
guidelines, and Community guidelines. Intended for Vercel and linked from the SoundCode
consumer app (`https://soundcode.com/...`).

## Routes

| Path | Page |
|------|------|
| `/` | Landing |
| `/faq` | Frequently Asked Questions |
| `/terms` | Terms and Conditions |
| `/privacy` | Privacy Policy |
| `/creator-guidelines` | Creator Guidelines |
| `/community-guidelines` | Community Guidelines |

## Local

```bash
npm install
npm run dev
```

## Deploy on Vercel

This project is a **Next.js static export** (`output: 'export'`). `npm run build` writes HTML to `out/`.

### Option A — Import repo (recommended)

1. Push this repo to GitHub / GitLab / Bitbucket.
2. In [Vercel](https://vercel.com/new), **Import** the repository.
3. Framework Preset: **Next.js** (detected automatically).
4. Build Command: `npm run build` (default).
5. Output Directory: `out` (set in `vercel.json`).
6. Deploy. Map `soundcode.com` (or a subdomain) under Project → Settings → Domains.

### Option B — CLI

```bash
npm i -g vercel
vercel
```

Confirm production:

```bash
npm run build
```

You should see routes under `out/` including nested folders like `out/faq/index.html` (trailing slashes enabled).

Legal copy is placeholder shared template content until counsel review — policy version
reference in the footer: `2026-06-01`.
