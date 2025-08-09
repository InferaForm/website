# Inferaform — Landing Page (Next.js + Tailwind)

A dark, modern, animated landing page with a working contact/booking form that emails `huzafa@inferaform.com` (via SMTP).

## Quick start

```bash
# 1) Install deps
npm i

# 2) Copy env and fill SMTP credentials
cp .env.example .env.local
# (edit .env.local with your SMTP details)

# 3) Run locally
npm run dev  # http://localhost:3000

# 4) Build
npm run build && npm start
```

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Create a new Vercel project, import the repo.
3. In Project Settings → Environment Variables, add:
   - `CONTACT_TO` = `huzafa@inferaform.com`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
4. Deploy. The form will POST to `/api/contact` and send email via your SMTP.

## Notes

- Uses Next.js App Router and TailwindCSS.
- Animations powered by Framer Motion and subtle CSS keyframes.
- All content is production-ready (no lorem ipsum).
- If you prefer Resend instead of SMTP, replace the API route with Resend SDK code and set `RESEND_API_KEY`.
