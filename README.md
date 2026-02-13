# Klinik Pratama Orin - Next.js Website

Website klinik kesehatan dan kecantikan yang dibangun dengan Next.js 15, React 18, TypeScript, dan Tailwind CSS.

## ✨ Fitur

- ✅ **SEO-Optimized** - Server-Side Rendering untuk SEO maksimal
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Fast Performance** - Next.js Image Optimization
- ✅ **Modern UI** - Tailwind CSS dengan gradient dan animasi
- ✅ **Booking System** - Terintegrasi dengan WhatsApp
- ✅ **Google Maps** - Lokasi klinik
- ✅ **Structured Data** - Schema.org markup
- ✅ **Sitemap & Robots.txt** - Auto-generated

## 🚀 Deploy ke Vercel (Super Mudah!)

### Opsi 1: Via Website (Recommended - 2 Menit)

1. Push code ke GitHub repository
2. Buka [vercel.com](https://vercel.com)
3. Login dengan GitHub
4. Klik "Add New Project"
5. Pilih repository ini
6. Klik "Deploy"
7. Selesai! ✨

Vercel akan otomatis detect Next.js dan deploy dengan konfigurasi optimal.

### Opsi 2: Via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 💻 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Buka [http://localhost:3000](http://localhost:3000)

## 📁 Struktur Folder

```
klinik-nextjs/
├── app/
│   ├── layout.tsx       # Root layout dengan SEO metadata
│   ├── page.tsx         # Homepage
│   ├── sitemap.ts       # Auto-generated sitemap
│   ├── manifest.ts      # PWA manifest
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── Doctors.tsx
│   ├── OperatingHours.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   └── BookingModal.tsx
├── public/
│   └── robots.txt
└── package.json
```

## 🎨 Teknologi

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image Component
- **Deployment**: Vercel

## 🔧 Konfigurasi SEO

Website ini sudah dikonfigurasi dengan:

- ✅ Meta tags lengkap (title, description, keywords)
- ✅ Open Graph tags untuk social media
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Robots.txt
- ✅ Sitemap.xml (auto-generated)
- ✅ Structured Data (JSON-LD)
- ✅ Alt text untuk semua gambar

## 📊 SEO Checklist Setelah Deploy

1. ✅ Deploy website ke Vercel
2. ⬜ Daftar ke [Google Search Console](https://search.google.com/search-console)
3. ⬜ Submit sitemap: `https://your-domain.vercel.app/sitemap.xml`
4. ⬜ Daftar ke [Google Business Profile](https://www.google.com/business/)
5. ⬜ Update nomor WhatsApp di:
   - `components/WhatsAppButton.tsx`
   - `components/BookingModal.tsx`
6. ⬜ Update kontak info di `components/Contact.tsx` dan `components/Footer.tsx`
7. ⬜ Update Google Maps embed URL di `components/Contact.tsx`
8. ⬜ Tambahkan Google Analytics (optional)

## 🌐 Custom Domain

Untuk menggunakan domain sendiri (contoh: klinikpratamaorin.com):

1. Beli domain di Niagahoster, Cloudflare, atau provider lain
2. Di Vercel dashboard → Settings → Domains
3. Tambahkan domain Anda
4. Update DNS records sesuai instruksi Vercel
5. SSL otomatis aktif! ✨

## 📱 WhatsApp Integration

Edit nomor WhatsApp di:
- `components/WhatsAppButton.tsx` (line 6)
- `components/BookingModal.tsx` (line 54)

Format: `628123456789` (tanpa +, tanpa -)

## 🎯 Performance

Website ini dioptimasi untuk:
- ⚡ Core Web Vitals
- 🖼️ Image optimization
- 📦 Code splitting
- 🚀 Fast loading
- 📱 Mobile performance

## 📄 License

© 2024 Klinik Pratama Orin. All rights reserved.

---

**Butuh bantuan?** Hubungi developer atau baca dokumentasi [Next.js](https://nextjs.org/docs)
