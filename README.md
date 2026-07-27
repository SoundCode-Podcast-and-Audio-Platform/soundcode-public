# SoundCode Public

Public site for the SoundCode landing page plus FAQ, Terms, Privacy, Creator
guidelines, and Community guidelines. Intended for Vercel and linked from the
SoundCode consumer app (`https://soundcode.com/...`).

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

This is a standard **Next.js** app. Leave Framework Preset as **Next.js** and do
**not** set a custom Output Directory (Vercel uses `.next` automatically).

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com/new), **Import** the repository.
3. Framework Preset: **Next.js** (default).
4. Build Command: `npm run build` (default).
5. Output Directory: leave **empty** / default (do not use `out`).
6. Deploy. Map your domain under Project → Settings → Domains.

If a previous attempt set Output Directory to `out`, clear that in
Project → Settings → General → Build & Development Settings, then redeploy.

Legal copy is placeholder shared template content until counsel review — policy
version reference in the footer: `2026-06-01`.
