// ─────────────────────────────────────────────────────
// data.ts  —  Single source of truth
// Edit this file to update your name, projects, services, bio
// ─────────────────────────────────────────────────────

export const SITE = {
  name:       'Adi Saputra',
  tagline:    'Logo Designer & Brand Identity',
  location:   'Tenggarong - Kota Raja - Kutai Kartanegara, Kalimantan Timur',
  email:      'adijoyproject@gmail.com',
  socials: {
    instagram: 'https://instagram.com/saputraadijoy',
    behance:   'https://behance.net/adijoy',
    linkedin:  'https://linkedin.com/in/',
  },
  heroText: {
    line1: 'Saya merancang',
    line2: 'identitas yang',
    line3: 'hidup dan diingat —',
    line4: 'bukan sekadar simbol.',
  },
}

// ─────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────
export type Category = 'brand' | 'logo' | 'wordmark' | 'packaging'

export interface Project {
  id:          string
  name:        string
  year:        string
  category:    string
  categories:  Category[]
  industry:    string
  bg:          string
  accent:      string
  dark:        boolean        // true = dark bg, white text
  tagline:     string
  description: string
  deliverables: string[]
  colors:      { hex: string; name: string }[]
}

export const PROJECTS: Project[] = [
  {
    id:          'arkana',
    name:        'Arkana Studio',
    year:        '2024',
    category:    'Brand Identity',
    categories:  ['brand', 'logo'],
    industry:    'Architecture & Interior',
    bg:          '#e8e0d4',
    accent:      '#1a1814',
    dark:        false,
    tagline:     'Ketenangan yang presisi.',
    description: 'Arkana Studio adalah firma arsitektur berbasis di Jakarta yang fokus pada desain residensial mewah. Brief-nya jelas: identitas yang tenang, tidak berisik, tapi punya bobot. Solusinya adalah mark geometri melingkar yang mengacu pada kompas arsitektur — simbol akurasi dan arah.',
    deliverables: ['Logo Mark', 'Wordmark', 'Brand Guidelines', 'Business Cards', 'Signage'],
    colors: [
      { hex: '#1a1814', name: 'Ink'      },
      { hex: '#c8401a', name: 'Rust'     },
      { hex: '#e8e0d4', name: 'Parchment'},
      { hex: '#8c8880', name: 'Stone'    },
    ],
  },
  {
    id:          'hexis',
    name:        'Hexis Group',
    year:        '2024',
    category:    'Logo Mark',
    categories:  ['logo'],
    industry:    'Financial Services',
    bg:          '#1a1814',
    accent:      '#c8401a',
    dark:        true,
    tagline:     'Kekuatan dalam struktur.',
    description: 'Hexis Group adalah perusahaan investasi yang beroperasi di 4 negara Asia Tenggara. Mereka membutuhkan simbol yang bicara tentang kestabilan dan skala. Hexagon sebagai bentuk paling efisien di alam menjadi fondasi mark ini.',
    deliverables: ['Logo Mark', 'Brandmark System', 'Brand Guidelines', 'Stationery', 'Digital Assets'],
    colors: [
      { hex: '#f5f2ec', name: 'Ivory'},
      { hex: '#c8401a', name: 'Rust' },
      { hex: '#1a1814', name: 'Ink'  },
      { hex: '#8c8880', name: 'Stone'},
    ],
  },
  {
    id:          'barid',
    name:        'Barid Coffee',
    year:        '2024',
    category:    'Wordmark',
    categories:  ['wordmark'],
    industry:    'F&B / Specialty Coffee',
    bg:          '#f0ece3',
    accent:      '#6b3e1e',
    dark:        false,
    tagline:     'Ritual yang sederhana, rasa yang dalam.',
    description: 'Barid adalah kedai kopi spesialti yang percaya bahwa kopi terbaik tidak butuh penjelasan panjang. Wordmark-nya dirancang dengan tipografi serif elegan yang membungkus nama dalam bentuk pill.',
    deliverables: ['Wordmark', 'Packaging', 'Cups & Merch', 'Signage'],
    colors: [
      { hex: '#6b3e1e', name: 'Espresso'},
      { hex: '#d4a56a', name: 'Caramel' },
      { hex: '#f0ece3', name: 'Cream'   },
      { hex: '#1a1814', name: 'Ink'     },
    ],
  },
  {
    id:          'lembah',
    name:        'Lembah Herb',
    year:        '2023',
    category:    'Packaging · Brand Identity',
    categories:  ['brand', 'packaging'],
    industry:    'Wellness / Herbal',
    bg:          '#2d3a2e',
    accent:      '#a8c5a0',
    dark:        true,
    tagline:     'Alam yang dikemas dengan hormat.',
    description: 'Lembah Herb adalah brand herbal yang sumber bahan bakunya dari Kalimantan. Identitas visualnya harus mencerminkan kepercayaan pada alam — tanpa terlihat kuno.',
    deliverables: ['Logo Mark', 'Packaging System', 'Label Design', 'Brand Guidelines'],
    colors: [
      { hex: '#a8c5a0', name: 'Sage'   },
      { hex: '#2d3a2e', name: 'Forest' },
      { hex: '#f5f2ec', name: 'Ivory'  },
      { hex: '#6b8f63', name: 'Moss'   },
    ],
  },
  {
    id:          'nova',
    name:        'Nova Digital',
    year:        '2023',
    category:    'Full Identity System',
    categories:  ['brand', 'logo'],
    industry:    'Technology / SaaS',
    bg:          '#1c1a2e',
    accent:      '#7b6ef6',
    dark:        true,
    tagline:     'Teknologi yang terasa manusiawi.',
    description: 'Nova Digital adalah startup SaaS yang membangun tools untuk tim remote. Sistem identitas lengkap ini mencakup logo mark modular, wordmark, dan sistem warna yang bekerja di dark dan light mode.',
    deliverables: ['Logo Mark', 'Wordmark', 'Brand System', 'UI Color System', 'Motion Guidelines', 'Social Kit'],
    colors: [
      { hex: '#7b6ef6', name: 'Violet'},
      { hex: '#f5f2ec', name: 'Ivory' },
      { hex: '#1c1a2e', name: 'Void'  },
      { hex: '#4ecdc4', name: 'Teal'  },
    ],
  },
  {
    id:          'rempah',
    name:        'Rempah Nusantara',
    year:        '2022',
    category:    'Packaging · Wordmark',
    categories:  ['wordmark', 'packaging'],
    industry:    'FMCG / Spice Brand',
    bg:          '#f2e8d5',
    accent:      '#8b6914',
    dark:        false,
    tagline:     'Warisan rasa dalam genggaman modern.',
    description: 'Rempah Nusantara membutuhkan rebrand total — dari tampilan yang kuno ke identitas yang bangga akan warisan tapi bicara pada konsumen muda. Sistem packaging ini mencakup 12 SKU dengan warna berbeda per kategori rempah.',
    deliverables: ['Wordmark', 'Logo Mark', 'Packaging System (12 SKU)', 'Brand Guidelines', 'E-commerce Assets'],
    colors: [
      { hex: '#8b6914', name: 'Gold'     },
      { hex: '#d4a84b', name: 'Turmeric' },
      { hex: '#f2e8d5', name: 'Cream'    },
      { hex: '#5c3d0e', name: 'Bark'     },
    ],
  },
]

// ─────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────
export const SERVICES = [
  {
    num:   '01',
    name:  'Brand Identity',
    desc:  'Sistem identitas visual yang kohesif — dari riset, konsep, hingga panduan brand yang lengkap dan siap pakai.',
  },
  {
    num:   '02',
    name:  'Logo Design',
    desc:  'Logo mark, wordmark, lettermark, atau kombinasi keduanya. Dirancang untuk bertahan lebih dari tren.',
  },
  {
    num:   '03',
    name:  'Packaging Design',
    desc:  'Kemasan yang berbicara sebelum produk dibuka. Desain struktural dan visual yang menjual di rak.',
  },
]

// ─────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────
export const ABOUT = {
  bio: [
    'Saya adalah logo designer berbasis di Tenggarong, Kutai Kartanegara, Kalimantan Timur yang telah membantu banyak bisnis — dari startup lokal hingga brand regional — menemukan suara visual mereka yang sesungguhnya.',
    'Proses saya dimulai bukan dari kertas, tapi dari pertanyaan. Apa yang bisnis ini yakini? Siapa yang harus tertarik? Apa yang membedakan mereka? Jawaban dari pertanyaan itulah yang menjadi fondasi setiap mark yang saya buat.',
    'Saya tidak mendesain untuk tren. Saya mendesain untuk ketahanan.',
  ],
  stats: [
    { num: '20+', label: 'Klien dilayani'    },
    { num: '4',   label: 'Industri utama'    },
    { num: '98%', label: 'Client return rate'},
  ],
  tools: ['Illustrator', 'Photoshop', 'Procreate'],
  yearsExp: 6,
}
