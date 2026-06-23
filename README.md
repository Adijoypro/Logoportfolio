# 🎨 Portfolio Template — Logo Designer
### Next.js 14 · Framer Motion · Tailwind CSS · Vercel
### Panduan Lengkap: Setup → Kustomisasi → Deploy

---

> **Estimasi waktu:** 45–90 menit untuk pertama kali dari nol sampai live.  
> **Tingkat kesulitan:** Pemula — tidak perlu pengalaman coding sebelumnya.

---

# BAGIAN 1 — PERSIAPAN AWAL

## 1.1 Install Node.js

Node.js adalah "mesin" yang menjalankan project ini di komputer kamu.

**Windows:**
1. Buka https://nodejs.org
2. Klik tombol **"20.x.x LTS"** (yang kiri, bukan Current)
3. Download file `.msi` → buka → klik Next terus → Finish
4. Restart komputer setelah install

**Mac:**
1. Buka https://nodejs.org
2. Klik **"20.x.x LTS"** → download `.pkg`
3. Buka file → ikuti instalasi → Finish

**Verifikasi berhasil:**
Buka Terminal (Mac) atau Command Prompt (Windows), ketik:
```
node -v
```
Harus muncul angka seperti `v20.14.0`. Kalau muncul, lanjut. ✅

---

## 1.2 Install VS Code (Code Editor)

1. Buka https://code.visualstudio.com
2. Download sesuai OS kamu → install seperti biasa
3. Buka VS Code
4. Klik ikon kotak di sidebar kiri (Extensions)
5. Install extension ini satu per satu (cari namanya, klik Install):
   - `ESLint`
   - `Tailwind CSS IntelliSense`
   - `Prettier - Code formatter`
   - `Auto Rename Tag`

---

## 1.3 Install Git

Git dibutuhkan untuk upload ke GitHub dan deploy ke Vercel.

**Windows:**
1. Buka https://git-scm.com/download/win
2. Download → install → semua default → Finish

**Mac:**
Git biasanya sudah ada. Cek dengan:
```
git --version
```
Kalau belum ada, install Xcode Command Line Tools:
```
xcode-select --install
```

---

# BAGIAN 2 — SETUP PROJECT

## 2.1 Buat Project Next.js Baru

Buka Terminal / Command Prompt, jalankan satu per satu:

```bash
# Pergi ke folder Desktop (atau folder mana pun yang kamu mau)
cd Desktop

# Buat folder baru dan masuk ke dalamnya
mkdir portfolio-saya
cd portfolio-saya

# Buat project Next.js (proses ini ~2-3 menit, butuh internet)
npx create-next-app@14.2.5 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
```

Saat proses berjalan, akan ada beberapa pertanyaan — **tekan Enter saja** untuk semua.

Setelah selesai, install library tambahan:
```bash
npm install framer-motion clsx
```

---

## 2.2 Buka di VS Code

```bash
code .
```

Perintah ini membuka folder project langsung di VS Code.  
Kamu akan lihat struktur folder di panel kiri.

---

## 2.3 Copy File Template

Sekarang copy semua file dari ZIP template ini ke dalam folder `portfolio-saya`.

**Struktur folder yang harus ada setelah copy:**

```
portfolio-saya/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← SEO, metadata, root HTML
│   │   ├── page.tsx            ← Halaman utama (assembles semua section)
│   │   └── globals.css         ← CSS global, design tokens
│   │
│   ├── components/
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx ← Hero interaktif dengan logo marks
│   │   │   └── logoMarks.ts    ← ⭐ Data semua logo di hero
│   │   │
│   │   ├── work/
│   │   │   ├── WorkSection.tsx ← Grid project + filter
│   │   │   └── ProjectModal.tsx← Modal detail project
│   │   │
│   │   ├── layout/
│   │   │   └── Navbar.tsx      ← Navbar glass + fullscreen overlay
│   │   │
│   │   ├── ui/
│   │   │   ├── LoadingScreen.tsx      ← Animasi loading awal
│   │   │   └── CurtainTransition.tsx  ← Wipe transition antar section
│   │   │
│   │   └── sections.tsx        ← Services, About, Contact, Footer
│   │
│   ├── hooks/
│   │   ├── useCursor.ts        ← Custom cursor logic
│   │   └── useScrollProgress.ts← Scroll tracking
│   │
│   └── lib/
│       └── data.ts             ← ⭐ SEMUA KONTEN di sini
│
├── public/
│   └── logos/                  ← Taruh file SVG/PNG logo kamu di sini
│
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── postcss.config.js
```

> **Catatan:** Kalau ada file yang sama dengan yang sudah ada (seperti `globals.css` atau `tailwind.config.js`), **timpa / overwrite** dengan file dari template ini.

---

## 2.4 Test Pertama Kali

```bash
npm run dev
```

Buka browser → **http://localhost:3000**

Kalau muncul website portfolio → berhasil ✅  
Kalau ada error → lihat Bagian 6 (Troubleshooting)

Untuk stop server: tekan `Ctrl + C` di terminal.

---

# BAGIAN 3 — KUSTOMISASI KONTEN

> Semua perubahan konten dilakukan di **dua file utama**.  
> Tidak perlu sentuh file lain untuk kustomisasi dasar.

---

## 3.1 File Utama: `src/lib/data.ts`

**Ini adalah satu-satunya tempat untuk mengubah:**
- Nama kamu
- Email & social media
- Data semua project
- Bio / tentang kamu
- Layanan yang ditawarkan
- Statistik (jumlah klien, dll)

Buka file ini di VS Code, edit bagian-bagian berikut:

### A. Informasi Diri

```typescript
export const SITE = {
  name:     'Nama Kamu',                        // ← Nama yang tampil di navbar & footer
  tagline:  'Logo Designer & Brand Identity',   // ← Tagline profesi
  location: 'Kota, Provinsi',                   // ← Lokasi kamu
  email:    'kamu@email.com',                   // ← Email untuk tombol Contact
  socials: {
    instagram: 'https://instagram.com/username', // ← Link Instagram kamu
    behance:   'https://behance.net/username',   // ← Link Behance kamu
    linkedin:  'https://linkedin.com/in/username',// ← Link LinkedIn kamu
  },
  heroText: {
    line1: 'Saya merancang',         // ← Baris 1 tagline hero (bisa diganti)
    line2: 'identitas yang',         // ← Baris 2
    line3: 'hidup dan diingat —',    // ← Baris 3 (italic merah)
    line4: 'bukan sekadar simbol.',  // ← Baris 4
  },
}
```

### B. Tambah / Edit Project

Setiap project dalam array `PROJECTS` tampil sebagai kartu di Work section.  
Copy-paste blok berikut untuk setiap project baru:

```typescript
{
  id:          'nama-unik-tanpa-spasi',   // ← ID unik, pakai huruf kecil dan strip
  name:        'Nama Klien',             // ← Nama yang tampil di kartu
  year:        '2024',                   // ← Tahun project
  category:    'Brand Identity',         // ← Kategori yang tampil sebagai badge
  categories:  ['brand', 'logo'],        // ← Untuk filter (pilih dari: 'brand','logo','wordmark','packaging')
  industry:    'Industri Klien',         // ← Misal: F&B, Technology, Fashion
  bg:          '#e8e0d4',               // ← Warna background kartu (hex)
  accent:      '#1a1814',               // ← Warna aksen (untuk garis bawah & CTA modal)
  dark:        false,                    // ← true = teks putih, false = teks hitam
  tagline:     'Satu kalimat singkat.',  // ← Tagline italic di modal
  description: 'Cerita di balik project ini...', // ← Paragraf deskripsi di modal
  deliverables: ['Logo Mark', 'Wordmark', 'Brand Guidelines'], // ← Daftar deliverables
  colors: [
    { hex: '#1a1814', name: 'Ink'   },  // ← Palet warna yang dipakai di project ini
    { hex: '#c8401a', name: 'Rust'  },
    { hex: '#e8e0d4', name: 'Sand'  },
  ],
},
```

**Tips memilih warna background kartu:**
- Project gelap/tegas → bg gelap, set `dark: true`
- Project bersih/premium → bg cream/putih, set `dark: false`
- Pakai warna dari brand klien sebagai bg untuk kesan cohesive

### C. Edit Bio & About

```typescript
export const ABOUT = {
  bio: [
    'Paragraf pertama tentang kamu dan background kamu...',
    'Paragraf kedua tentang proses kerja atau filosofi kamu...',
    'Paragraf ketiga, kalimat penutup yang memorable...',
  ],
  stats: [
    { num: '20+', label: 'Klien dilayani'     },  // ← Ganti angka sesuai realita
    { num: '4',   label: 'Industri utama'     },
    { num: '98%', label: 'Client return rate' },
  ],
  tools: ['Illustrator', 'Figma', 'Photoshop', 'Procreate'], // ← Tools yang kamu pakai
  yearsExp: 8,  // ← Tahun pengalaman (tampil di badge foto)
}
```

### D. Edit Layanan

```typescript
export const SERVICES = [
  {
    num:  '01',
    name: 'Brand Identity',
    desc: 'Deskripsi layanan pertama kamu...',
  },
  {
    num:  '02',
    name: 'Logo Design',
    desc: 'Deskripsi layanan kedua...',
  },
  {
    num:  '03',
    name: 'Packaging Design',
    desc: 'Deskripsi layanan ketiga...',
  },
]
```

---

## 3.2 File Kedua: `src/components/hero/logoMarks.ts`

File ini mengatur **semua logo yang tampil dan bergerak di hero section**.

Setiap item dalam array adalah satu logo yang bisa diklik untuk berganti variasi.

### Cara Ganti dengan Logo Asli Kamu

**Langkah 1 — Export SVG dari Illustrator:**
1. Buka file logo di Illustrator
2. File → Export → Export As → pilih format **SVG**
3. Klik Export → di dialog SVG Options:
   - Styling: `Inline Style`
   - Font: `Convert to Outline` (kalau ada teks)
   - Images: `Embed`
   - Klik OK
4. Buka file `.svg` hasil export dengan VS Code atau Notepad
5. Copy seluruh isinya (dari `<svg` sampai `</svg>`)

**Langkah 2 — Export SVG dari Figma:**
1. Pilih komponen logo kamu
2. Klik kanan → Copy/Paste as → **Copy as SVG**
3. Paste ke Notepad dulu untuk lihat isinya

**Langkah 3 — Taruh di logoMarks.ts:**

```typescript
export const LOGO_MARKS = [
  {
    id:     'logo-klien-1',      // ← ID unik, huruf kecil, tanpa spasi
    label:  'Arkana Studio',     // ← Nama yang muncul saat hover
    size:   100,                 // ← Ukuran dalam px (lihat panduan ukuran di bawah)
    rotate: -4,                  // ← Rotasi awal dalam derajat (-15 sampai 15)
    pos: {
      left: '48%',               // ← Posisi horizontal (% dari kiri layar)
      top:  '8%',                // ← Posisi vertikal (% dari atas layar)
    },
    variants: [
      // Variant 1 — versi utama (tampil pertama kali)
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
        <!-- PASTE ISI SVG KAMU DI SINI -->
        <!-- Hapus baris xmlns jika sudah ada di tag svg -->
      </svg>`,

      // Variant 2 — versi reverse / warna berbeda (muncul setelah diklik)
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
        <!-- Paste versi lain logo yang sama (misal: warna putih, atau versi outline) -->
      </svg>`,

      // Variant 3 — opsional, wordmark atau versi ketiga
      `<svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
        <!-- Bisa juga wordmark / teks -->
      </svg>`,
    ],
  },

  // Duplikasi blok di atas untuk setiap logo tambahan
  // Minimal 8 logo untuk hero yang terlihat penuh
]
```

### Panduan Ukuran Logo (`size`)

| Ukuran | Kapan dipakai |
|--------|---------------|
| 60–75px  | Logo kecil sebagai aksen, detail |
| 80–95px  | Ukuran standar supporting mark |
| 100–115px | Ukuran medium, mid-weight |
| 120–140px | Logo besar, anchor visual (1–2 per hero) |

> **Tips:** Campur ukuran untuk hierarki visual. Jangan semua sama besar.

### Panduan Posisi Logo

Zona yang direkomendasikan (kanan layar, hindari area tagline kiri):

```
left: 44%–88%  (zona kanan layar)
top:  4%–82%   (jangan terlalu ke tepi)
```

Contoh layout 12 logo yang balanced:
```
Baris 1 (top 4–10%):    left 48%, 66%, 82%
Baris 2 (top 26–34%):   left 44%, 62%, 78%
Baris 3 (top 50–58%):   left 50%, 67%, 84%
Baris 4 (top 70–78%):   left 46%, 63%, 79%
```

### Tips SVG untuk Hasil Terbaik

- Pastikan ada attribute `viewBox` di tag `<svg>` — ini wajib
- Tambahkan `style="width:100%;height:100%"` di tag `<svg>`
- Kalau logo pakai font → convert to outline dulu di Illustrator
- Kalau warna logo hitam tapi bg hero juga gelap → buat variant dengan warna putih/terang
- Ukuran file SVG sebaiknya di bawah 10KB per logo untuk performa optimal
- Hapus comment dan metadata yang tidak perlu dari SVG (`<!-- Generator: Adobe... -->`)

---

## 3.3 Ganti Foto di Section About

Sekarang ada placeholder SVG. Untuk ganti dengan foto asli:

**Langkah 1 — Siapkan foto:**
- Format: JPG atau WebP
- Ukuran: minimal 640×768px (rasio portrait 5:6)
- Rename jadi: `foto-profil.jpg`
- Taruh di folder: `public/`

**Langkah 2 — Edit `sections.tsx`:**

Cari baris ini di `AboutSection` component:
```tsx
{/* Portrait placeholder */}
<div style={{ width:'100%', aspectRatio:'5/6', background:'#e0dbd0', ... }}>
  <svg ...>...</svg>   {/* ← Hapus SVG ini */}
  <span ...>Foto Anda</span>  {/* ← Hapus span ini */}
</div>
```

Ganti isi div menjadi:
```tsx
<div style={{ width:'100%', aspectRatio:'5/6', background:'#e0dbd0', borderRadius:'4px', overflow:'hidden', position:'relative' }}>
  <img
    src="/foto-profil.jpg"
    alt="Nama Kamu"
    style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }}
  />
</div>
```

---

## 3.4 Ganti Warna Tema

Edit `src/app/globals.css`, bagian `:root`:

```css
:root {
  --ink:    #1a1814;  /* Warna utama — sekarang hitam hangat */
  --paper:  #f5f2ec;  /* Background — sekarang putih krem */
  --accent: #c8401a;  /* Warna aksen — sekarang merah bata */
  --muted:  #8c8880;  /* Teks sekunder — abu-abu */
}
```

**Contoh kombinasi warna alternatif:**

| Tema | --ink | --paper | --accent |
|------|-------|---------|----------|
| Classic (default) | `#1a1814` | `#f5f2ec` | `#c8401a` |
| Midnight Blue | `#0f1923` | `#f0f4f8` | `#2563eb` |
| Forest | `#1a2e1a` | `#f0f5ee` | `#4a7c59` |
| Warm Charcoal | `#2a2520` | `#faf7f2` | `#d4a843` |
| Pure Monochrome | `#111111` | `#f9f9f9` | `#888888` |

---

## 3.5 Edit SEO & Metadata

Buka `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title:       'Nama Kamu — Logo Designer & Brand Identity',  // ← Ganti
  description: 'Deskripsi singkat tentang kamu dan jasa kamu.',// ← Ganti
  keywords:    ['logo designer', 'brand identity', 'kota kamu'],// ← Ganti
  authors:     [{ name: 'Nama Kamu' }],                         // ← Ganti
  openGraph: {
    title:       'Nama Kamu — Logo Designer',     // ← Ganti
    description: 'Deskripsi untuk preview link.', // ← Ganti
    // Untuk gambar preview saat share di sosmed, tambahkan:
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}
```

**Untuk gambar OG (Open Graph / preview sosmed):**
1. Buat gambar 1200×630px di Figma/Canva dengan nama dan tagline kamu
2. Export sebagai `og-image.jpg`
3. Taruh di folder `public/`
4. Uncomment baris `images` di atas

---

# BAGIAN 4 — DEPLOY KE VERCEL

## 4.1 Buat Akun GitHub

1. Buka https://github.com → Sign up (gratis)
2. Verifikasi email
3. Buat repository baru:
   - Klik tombol `+` (pojok kanan atas) → New repository
   - Repository name: `portfolio-website`
   - Visibility: **Public** (untuk free Vercel deployment)
   - Klik **Create repository**

---

## 4.2 Upload Project ke GitHub

Buka terminal di folder project kamu:

```bash
# Inisialisasi git
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial portfolio"

# Set branch utama
git branch -M main

# Hubungkan ke GitHub (ganti USERNAME dengan username GitHub kamu)
git remote add origin https://github.com/USERNAME/portfolio-website.git

# Upload ke GitHub
git push -u origin main
```

Saat diminta username dan password GitHub:
- Username: username GitHub kamu
- Password: **bukan password login** — kamu perlu Personal Access Token

**Cara buat Personal Access Token:**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → centang `repo` → Generate
3. Copy token tersebut → pakai sebagai "password" di terminal

---

## 4.3 Deploy ke Vercel

1. Buka https://vercel.com → Sign up / Login dengan GitHub
2. Klik **"Add New Project"**
3. Pilih repository `portfolio-website` → klik **Import**
4. Di halaman konfigurasi:
   - Framework Preset: **Next.js** (otomatis terdeteksi)
   - Root Directory: `.` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
5. Klik **Deploy**
6. Tunggu 2–3 menit

Website langsung live di URL seperti:
```
https://portfolio-website-abc123.vercel.app
```

---

## 4.4 Update Website Setelah Deploy

Setiap kali kamu edit file dan ingin update website:

```bash
git add .
git commit -m "Deskripsi perubahan yang kamu buat"
git push
```

Vercel otomatis detect push dan rebuild website dalam ~1 menit.

---

## 4.5 Hubungkan Domain Sendiri (Opsional)

Kalau kamu punya domain (misal dari Niagahoster, Domainesia, GoDaddy):

1. Vercel Dashboard → pilih project kamu → **Settings** → **Domains**
2. Ketik domain kamu (misal: `namakamu.com`) → Add
3. Vercel akan tampilkan **Nameserver** atau **DNS Record** yang perlu ditambahkan
4. Login ke registrar domain kamu → DNS Settings → tambahkan record dari Vercel
5. Tunggu propagasi DNS (15 menit – 24 jam)

---

# BAGIAN 5 — STRUKTUR KODE (Untuk yang Ingin Tahu Lebih)

Tidak wajib dibaca kalau kamu hanya mau kustomisasi konten. Ini untuk yang ingin modifikasi lebih dalam.

## 5.1 Bagaimana Data Mengalir

```
data.ts  →  page.tsx  →  Semua Section Components
   ↓
SITE, PROJECTS, ABOUT, SERVICES
   ↓
Ditampilkan di: Navbar, Hero, WorkSection, ProjectModal,
                ServicesSection, AboutSection, ContactSection, Footer
```

## 5.2 Sistem Warna

Warna didefinisikan di `globals.css` sebagai CSS variables, lalu dipakai di seluruh komponen via `var(--ink)`, `var(--paper)`, dll. Ganti satu kali di globals.css, berubah di seluruh website.

## 5.3 Animasi

Semua animasi menggunakan **Framer Motion**:
- `LoadingScreen.tsx` — loading awal, split exit
- `HeroSection.tsx` — parallax via `useSpring`, fade-up logo marks
- `Navbar.tsx` — overlay slide, link stagger
- `WorkSection.tsx` — `AnimatePresence` untuk filter transition
- `ProjectModal.tsx` — scale-up entrance
- `sections.tsx` — `whileInView` fade-up untuk setiap section

## 5.4 Custom Hooks

| Hook | Fungsi |
|------|--------|
| `useCursor.ts` | Track posisi mouse, toggle class `hovering` |
| `useScrollProgress.ts` | Hitung % scroll, detect section aktif |

---

# BAGIAN 6 — TROUBLESHOOTING

## Error Umum

**`Module not found: Can't resolve '@/...'`**
- Pastikan `tsconfig.json` punya: `"paths": { "@/*": ["./src/*"] }`
- Restart dev server: `Ctrl+C` lalu `npm run dev` lagi

**`Hydration error` / perbedaan server-client**
- Komponen yang pakai `window`, `document`, atau browser API wajib punya `'use client'` di baris pertama file
- Semua komponen di template ini sudah punya, tapi kalau kamu tambah komponen baru — ingat ini

**`Build failed` saat deploy ke Vercel**
- Jalankan dulu di lokal: `npm run build`
- Lihat error yang muncul, biasanya ada di baris terakhir output
- Paling sering: TypeScript type error — cek tanda merah di VS Code

**Logo SVG tidak muncul di hero**
- Pastikan tag `<svg>` punya attribute `viewBox`
- Tambahkan `style="width:100%;height:100%"` di tag `<svg>`
- Cek tidak ada karakter kutip yang salah di dalam template literal

**Font tidak tampil**
- Biasanya koneksi internet saat `npm run dev` pertama kali
- Atau Google Fonts diblokir → download font dan taruh di `public/fonts/`

**Website baik di desktop tapi aneh di mobile**
- Buka DevTools browser (F12) → toggle device toolbar (ikon HP)
- Cek di width 375px (iPhone), 768px (tablet)
- Komponen yang perlu disesuaikan: hero tagline size, about grid, contact grid

---

## Perintah Terminal yang Sering Dipakai

```bash
npm run dev      # Jalankan development server (localhost:3000)
npm run build    # Build untuk production (wajib test sebelum deploy)
npm run start    # Jalankan production build di lokal
npm run lint     # Cek error ESLint

git status       # Lihat file yang berubah
git add .        # Stage semua perubahan
git commit -m "" # Commit dengan pesan
git push         # Upload ke GitHub (Vercel auto-deploy)
```

---

# BAGIAN 7 — CHECKLIST SEBELUM LIVE

Centang semua ini sebelum share link ke klien atau posting di sosmed:

**Konten:**
- [ ] Nama, email, lokasi sudah diganti di `data.ts`
- [ ] Social media links sudah benar
- [ ] Semua project sudah diisi (minimal 4–6 project)
- [ ] Bio sudah ditulis ulang dengan kata-kata sendiri
- [ ] Tagline hero sudah personal dan relevan

**Visual:**
- [ ] Logo asli sudah masuk ke hero (minimal 8 logo)
- [ ] Foto profil sudah diganti (section About)
- [ ] Warna tema sudah sesuai preferensi

**Technical:**
- [ ] `npm run build` berhasil tanpa error
- [ ] Test di mobile (375px width) — semua konten terbaca
- [ ] Test di tablet (768px) — layout tidak berantakan
- [ ] Form contact test send (muncul success message)
- [ ] Loading screen muncul dan exit dengan benar
- [ ] Semua link social media berfungsi

**SEO:**
- [ ] Title dan description di `layout.tsx` sudah diganti
- [ ] OG image sudah dibuat dan ditaruh di `public/`

---

# BAGIAN 8 — PENGEMBANGAN SELANJUTNYA

Fitur yang bisa ditambahkan setelah website live:

| Fitur | Tool | Kesulitan | Estimasi |
|-------|------|-----------|----------|
| Form email beneran kirim | Resend / EmailJS | ⭐⭐ | 1–2 jam |
| CMS untuk edit konten tanpa coding | Sanity.io | ⭐⭐⭐ | 3–5 jam |
| Halaman detail project (`/work/[slug]`) | Next.js dynamic routes | ⭐⭐⭐ | 2–4 jam |
| Analytics pengunjung | Vercel Analytics | ⭐ | 15 menit |
| Password-protected page | Next.js middleware | ⭐⭐ | 1 jam |
| Blog / artikel | Contentlayer + MDX | ⭐⭐⭐ | 4–6 jam |

---

*Template dibuat dengan Next.js 14, Framer Motion, Tailwind CSS.*  
*Didesain khusus untuk logo designer dan brand identity specialist.*
