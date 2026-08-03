# Inferaform Website

A professional, modern website built with Next.js 14, React, Framer Motion, and shadcn/ui components.

## Features

- 🎨 **Modern Design**: Professional UI with glassmorphism effects and smooth animations
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Built on Next.js 14 with App Router
- 🎭 **Smooth Animations**: Powered by Framer Motion
- 📧 **Contact Form**: Full-featured form with email integration
- 🎯 **SEO Optimized**: Proper metadata and semantic HTML
- 🌙 **Dark Mode**: Beautiful dark theme optimized for readability

## Sections

1. **Hero** - Eye-catching introduction with key value propositions
2. **Social Proof** - Trusted brands showcase
3. **Solutions** - 6 AI solution cards with detailed features
4. **Showcase/Process** - 4-step implementation process with tabs for tech stacks
5. **Pricing** - 3-tier pricing cards (Starter, Growth, Enterprise)
6. **Testimonials** - Client success stories
7. **FAQ** - Accordion-style frequently asked questions
8. **Contact Form** - Full demo booking form with NDA option
9. **Footer** - Multi-column with links and newsletter signup

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Email**: Resend

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd website
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Edit `.env.local` with your Resend credentials (see Email Configuration below)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

Build for production:

```bash
npm run build
npm start
```

## Email Configuration

The contact form uses [Resend](https://resend.com). See `.env.example` for setup details.

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL="Inferaform <hello@inferaform.com>"
CONTACT_EMAIL_TO=inferaform@gmail.com
```

`RESEND_FROM_EMAIL` must use a domain verified in Resend.

## Project Structure

```
website/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── Logo.tsx
│   │   └── SectionHeading.tsx
│   ├── globals.css               # Global styles + Tailwind
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main landing page
├── lib/
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── components.json               # shadcn/ui configuration
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── tailwind.config.js            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## Customization

### Branding

- Update company name in `app/page.tsx` (Navbar, Hero, Footer)
- Replace logo in `app/components/Logo.tsx`
- Update metadata in `app/layout.tsx`

### Colors

Edit `tailwind.config.js` and `app/globals.css` to change the color scheme:

```css
/* app/globals.css */
:root {
  --primary: 243 75% 59%;      /* Your brand color */
  --background: 222.2 84% 4.9%; /* Background color */
  /* ... */
}
```

### Content

All content is in `app/page.tsx`:
- Solutions: Edit the `solutions` array
- Pricing: Edit the `tiers` array
- Testimonials: Edit the `items` array
- FAQ: Edit the `qa` array

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## Troubleshooting

### Contact Form Not Working

1. Check `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_EMAIL_TO` in `.env.local`
2. Confirm the from address domain is verified in Resend
3. Check server logs: `npm run dev` will show errors

### Styling Issues

1. Clear `.next` cache: `rm -rf .next`
2. Rebuild: `npm run dev`
3. Check browser console for errors

### Build Errors

1. Check TypeScript errors: `npx tsc --noEmit`
2. Update dependencies: `npm update`
3. Clear node_modules: `rm -rf node_modules && npm install`

## License

All rights reserved © 2025 Inferaform

## Support

For questions or issues, contact: inferaform@gmail.com
