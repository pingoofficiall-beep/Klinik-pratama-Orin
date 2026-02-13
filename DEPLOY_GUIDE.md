# 🚀 PANDUAN DEPLOY WEBSITE KLINIK KE VERCEL

## ✅ LANGKAH 1: Persiapan (5 Menit)

### 1.1 Pastikan File Sudah Lengkap
Pastikan semua file dan folder ada di komputer Anda:
```
klinik-nextjs/
├── app/
├── components/
├── public/
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── ... (file lainnya)
```

### 1.2 Install Dependencies (Jika Belum)
Buka terminal/command prompt di folder `klinik-nextjs`:
```bash
npm install
```

### 1.3 Test di Local (Opsional tapi Recommended)
```bash
npm run dev
```
Buka http://localhost:3000 untuk test website

---

## 🎯 LANGKAH 2: Push ke GitHub (10 Menit)

### 2.1 Buat Repository di GitHub
1. Buka https://github.com
2. Login ke akun GitHub Anda
3. Klik tombol **"New"** (hijau) untuk buat repository baru
4. Isi nama repository: `klinik-pratama-orin-nextjs`
5. Pilih **Public** (agar bisa deploy gratis)
6. **JANGAN** centang "Add README" (kita sudah punya)
7. Klik **"Create repository"**

### 2.2 Push Code ke GitHub
Di terminal, jalankan perintah berikut satu per satu:

```bash
# Masuk ke folder project
cd klinik-nextjs

# Initialize git
git init

# Add semua file
git add .

# Commit
git commit -m "Initial commit - Next.js website Klinik Pratama Orin"

# Tambahkan remote (GANTI 'username' dengan username GitHub Anda!)
git remote add origin https://github.com/username/klinik-pratama-orin-nextjs.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

**PENTING**: Ganti `username` dengan username GitHub Anda!

---

## 🚀 LANGKAH 3: Deploy ke Vercel (2 MENIT!)

### Opsi A: Deploy Via Website (Paling Mudah)

1. **Buka Vercel**
   - Kunjungi https://vercel.com
   - Klik **"Sign Up"** atau **"Login"**

2. **Login dengan GitHub**
   - Pilih **"Continue with GitHub"**
   - Authorize Vercel untuk akses GitHub Anda

3. **Import Project**
   - Klik **"Add New..."** → **"Project"**
   - Vercel akan otomatis detect repository GitHub Anda
   - Cari dan pilih `klinik-pratama-orin-nextjs`
   - Klik **"Import"**

4. **Configure Project** (Biarkan Default!)
   - Framework Preset: **Next.js** (auto-detect)
   - Root Directory: **`./`** (default)
   - Build Command: **`npm run build`** (default)
   - Output Directory: **`.next`** (default)
   - Install Command: **`npm install`** (default)
   
5. **Deploy!**
   - Klik tombol **"Deploy"**
   - Tunggu 2-3 menit
   - ✨ **SELESAI!** Website live!

6. **Get Your URL**
   - Vercel akan kasih URL seperti: `klinik-pratama-orin-nextjs.vercel.app`
   - Klik URL untuk lihat website live!

### Opsi B: Deploy Via CLI (Untuk yang Familiar dengan Terminal)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd klinik-nextjs
vercel --prod
```

---

## 🎨 LANGKAH 4: Kustomisasi (15 Menit)

Setelah deploy, edit beberapa hal ini:

### 4.1 Update Nomor WhatsApp
**File**: `components/WhatsAppButton.tsx` (baris 6)
```typescript
const whatsappNumber = '628123456789'; // Ganti dengan nomor WA klinik
```

**File**: `components/BookingModal.tsx` (baris 54)
```typescript
const whatsappNumber = '628123456789'; // Ganti dengan nomor WA klinik
```

### 4.2 Update Informasi Kontak
**File**: `components/Contact.tsx`
- Update alamat klinik
- Update nomor telepon
- Update email
- Update Google Maps embed URL

**File**: `components/Footer.tsx`
- Update alamat dan kontak

### 4.3 Update Social Media Links
**File**: `components/Contact.tsx` dan `components/Footer.tsx`
- Update link Facebook
- Update link Instagram
- Update link Twitter

### 4.4 Setelah Edit, Push Update
```bash
git add .
git commit -m "Update contact info and WhatsApp number"
git push
```

Vercel akan **otomatis** deploy ulang! 🎉

---

## 🌐 LANGKAH 5: Custom Domain (Opsional)

### 5.1 Beli Domain
Beli domain di:
- Niagahoster (Rp 15-50rb/tahun untuk .com)
- Cloudflare Registrar (paling murah)
- Namecheap
- GoDaddy

Contoh: `klinikpratamaorin.com`

### 5.2 Connect Domain ke Vercel

**Di Vercel Dashboard:**
1. Pilih project Anda
2. Klik tab **"Settings"**
3. Klik **"Domains"**
4. Klik **"Add"**
5. Masukkan domain Anda: `klinikpratamaorin.com`
6. Vercel akan kasih instruksi DNS

**Di Domain Provider (Contoh: Niagahoster):**
1. Login ke panel domain
2. Cari **"DNS Management"** atau **"Manage DNS"**
3. Tambahkan record sesuai instruksi Vercel:
   - Type: **A**
   - Name: **@**
   - Value: **76.76.21.21**
   
   - Type: **CNAME**
   - Name: **www**
   - Value: **cname.vercel-dns.com**

4. Save dan tunggu 1-24 jam (biasanya 5-10 menit)
5. SSL otomatis aktif! ✨

---

## 📊 LANGKAH 6: Google Search Console (SEO)

### 6.1 Daftar di Google Search Console
1. Buka https://search.google.com/search-console
2. Login dengan Google Account
3. Klik **"Add Property"**
4. Pilih **"URL prefix"**
5. Masukkan URL: `https://klinik-pratama-orin-nextjs.vercel.app`
6. Verify ownership (pilih metode HTML tag)

### 6.2 Submit Sitemap
1. Di Google Search Console, klik **"Sitemaps"**
2. Add new sitemap: `sitemap.xml`
3. Submit!

### 6.3 Request Indexing
1. Klik **"URL Inspection"**
2. Paste URL homepage Anda
3. Klik **"Request Indexing"**

**Tunggu 1-7 hari**, website Anda akan muncul di Google! 🎉

---

## 🏪 LANGKAH 7: Google Business Profile (Opsional)

1. Buka https://www.google.com/business/
2. Buat profil bisnis klinik
3. Tambahkan:
   - Nama: Klinik Pratama Orin
   - Alamat lengkap
   - Nomor telepon
   - Website: (URL Vercel Anda)
   - Jam operasional
   - Foto klinik
4. Verifikasi bisnis (via pos/telepon)

Setelah verified, klinik akan muncul di Google Maps! 📍

---

## ✅ CHECKLIST SETELAH DEPLOY

- [ ] Website live di Vercel
- [ ] Test semua fitur (booking, WhatsApp button, dll)
- [ ] Update nomor WhatsApp
- [ ] Update kontak info
- [ ] Update social media links
- [ ] Test di mobile (responsive)
- [ ] Submit sitemap ke Google Search Console
- [ ] Request indexing di Google
- [ ] (Opsional) Custom domain setup
- [ ] (Opsional) Google Business Profile

---

## 🆘 Troubleshooting

### Website Tidak Muncul di Google
**Solusi**: Tunggu 3-7 hari. SEO butuh waktu. Pastikan sudah submit sitemap.

### Error saat Deploy
**Solusi**: Cek build logs di Vercel dashboard. Biasanya karena typo atau missing dependency.

### WhatsApp Button Tidak Berfungsi
**Solusi**: Pastikan nomor format: `628123456789` (tanpa +, tanpa -, tanpa spasi)

### Update Code Tidak Muncul
**Solusi**: 
```bash
git add .
git commit -m "Update code"
git push
```
Vercel auto-deploy dalam 1-2 menit.

---

## 📞 Kontak Support

**Vercel Documentation**: https://vercel.com/docs
**Next.js Documentation**: https://nextjs.org/docs

---

## 🎉 SELAMAT!

Website klinik Anda sekarang:
- ✅ Live di internet
- ✅ SEO-friendly
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ Gratis hosting selamanya (100GB bandwidth)
- ✅ SSL/HTTPS otomatis
- ✅ Auto-deploy setiap git push

**Share URL ke klien**: `https://klinik-pratama-orin-nextjs.vercel.app`

Setiap kali Anda push ke GitHub, Vercel otomatis deploy update! 🚀
