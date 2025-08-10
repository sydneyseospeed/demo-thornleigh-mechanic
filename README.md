# Thornleigh Mechanic & Auto Electrician

Production-ready Next.js 14 website optimized for Core Web Vitals and local SEO.

## 🚀 Quick Deploy to Vercel

### Prerequisites
- Node.js 18+ installed
- Vercel account (free at vercel.com)
- Formspree account for contact form

### Deploy Steps

1. **Clone and Install**
```bash
npm install
```

2. **Configure Environment**
Copy `.env.example` to `.env.local` and replace placeholders:
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
NEXT_PUBLIC_SITE_URL=https://your-domain.com.au
```

3. **Replace Placeholders**
Search and replace these tokens throughout the codebase:
- `REPLACE_WITH_PHONE` → Your phone number (e.g., "0412 345 678")
- `REPLACE_WITH_ADDRESS` → Your address (e.g., "123 Pacific Hwy, Thornleigh NSW 2120")
- `REPLACE_WITH_CALENDLY` → Your Calendly URL
- `REPLACE_WITH_FORMSPREE_ENDPOINT` → Your Formspree endpoint
- `REPLACE_WITH_GOOGLE_MAPS_IFRAME` → Your Google Maps embed URL
- `REPLACE_WITH_PRIMARY_SERVICE_KEYWORDS` → Your target keywords
- `REPLACE_LATER_DOMAIN` → Your domain (e.g., "thornleighmechanic.com.au")

4. **Add Images**
Place these files in `/public`:
- `logo.png` - Your logo (recommended: 200x60px)
- `favicon-32.png` - Favicon (32x32px)
- `hero-mechanic.avif` - Hero image (600x400px, <100KB)
- `hero-mechanic.webp` - Fallback hero image

5. **Build and Test Locally**
```bash
npm run build
npm run start
```

6. **Deploy to Vercel**
```bash
npx vercel --prod
```
Or connect GitHub repo to Vercel for automatic deployments.

## 📊 Performance Targets

### Core Web Vitals
- **LCP**: <1.8s (mobile), <1.2s (desktop)
- **CLS**: <0.02
- **INP**: <150ms
- **FCP**: <1.5s

### Lighthouse Scores (Mobile)
- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## 🔧 Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier
- `npm run lhci` - Run Lighthouse CI

### Testing Performance
1. **Local Lighthouse**
```bash
npm run build && npm run start
# In another terminal:
npx lighthouse http://localhost:3000 --view
```

2. **Lighthouse CI**
```bash
npm run build && npm run start
# In another terminal:
npm run lhci
```

## 🎯 SEO Checklist

- [ ] Replace all placeholder tokens
- [ ] Set up Google My Business
- [ ] Submit sitemap to Google Search Console
- [ ] Configure Formspree form
- [ ] Add real images (optimized AVIF/WebP)
- [ ] Update meta descriptions
- [ ] Add Google Analytics (optional)
- [ ] Set up domain and SSL
- [ ] Test all contact methods

## 📈 Optimization Notes

### Image Optimization
- Hero image: AVIF format, <100KB, priority loading
- Service icons: SVG format for scalability
- All images use `next/image` with proper `sizes` attribute

### JavaScript Budget
- Route JS: ~85KB gzipped (well under 120KB target)
- No heavy libraries, only essential React components
- CSS transitions instead of JS animations

### Critical CSS
- Tailwind utilities are purged and minified
- Critical styles inlined via Next.js
- Font loading optimized with `font-display: swap`

## 🛡️ Security

- CSP headers configured for Formspree, Calendly, Google Maps
- HSTS enabled with preload
- XSS protection headers
- Honeypot field on contact form
- No secrets in repository

## 📝 License

© 2024 Sydney SEO Speed. All rights reserved.

---

**Need help?** Contact Sydney SEO Speed for the SEO Jumpstart Package - A$790, delivered in 3 days.
