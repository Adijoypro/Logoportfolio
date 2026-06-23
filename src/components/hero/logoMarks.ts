// logoMarks.ts — SVG mark definitions with mobile positions

export interface LogoMark {
  id:       string
  label:    string
  size:     number
  rotate:   number
  pos:      { left: string; top: string }
  // Mobile override (optional)
  mobilePos?:  { left: string; top: string }
  mobileSize?: number
  hideOnMobile?: boolean
  variants: string[]
}

export const LOGO_MARKS: LogoMark[] = [
  {
    id: 'a', label: 'Circular', size: 96, rotate: -4,
    pos:       { left: '48%', top: '8%' },
    mobilePos: { left: '52%', top: '4%' }, mobileSize: 58,
    variants: [
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;filter:drop-shadow(0 2px 8px rgba(26,24,20,0.08))"><circle cx="50" cy="50" r="38" stroke="#1a1814" stroke-width="3.5"/><circle cx="50" cy="50" r="20" fill="#1a1814"/><line x1="50" y1="12" x2="50" y2="88" stroke="#f5f2ec" stroke-width="2"/><line x1="12" y1="50" x2="88" y2="50" stroke="#f5f2ec" stroke-width="2"/></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><circle cx="50" cy="50" r="38" fill="#1a1814"/><circle cx="50" cy="50" r="20" stroke="#f5f2ec" stroke-width="2.5" fill="none"/><circle cx="50" cy="50" r="6" fill="#c8401a"/></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><circle cx="50" cy="50" r="38" stroke="#c8401a" stroke-width="3.5"/><circle cx="35" cy="50" r="14" fill="#1a1814"/><circle cx="65" cy="50" r="14" fill="#1a1814"/></svg>`,
    ],
  },
  {
    id: 'b', label: 'Wordmark', size: 72, rotate: 3,
    pos:       { left: '66%', top: '6%' },
    mobilePos: { left: '72%', top: '5%' }, mobileSize: 46,
    variants: [
      `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect x="4" y="4" width="112" height="72" rx="36" stroke="#1a1814" stroke-width="3" fill="none"/><text x="60" y="52" text-anchor="middle" font-family="serif" font-size="34" fill="#1a1814" font-weight="700" letter-spacing="2">BRD</text></svg>`,
      `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect x="4" y="4" width="112" height="72" rx="4" fill="#1a1814"/><text x="60" y="52" text-anchor="middle" font-family="serif" font-size="34" fill="#f5f2ec" font-weight="700" letter-spacing="2">BRD</text></svg>`,
      `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect x="4" y="4" width="112" height="72" rx="4" fill="none" stroke="#1a1814" stroke-width="3"/><text x="60" y="52" text-anchor="middle" font-family="serif" font-size="34" fill="#c8401a" font-weight="700" letter-spacing="2">BRD</text></svg>`,
    ],
  },
  {
    id: 'c', label: 'Emblem', size: 120, rotate: 0,
    pos:       { left: '82%', top: '4%' },
    mobilePos: { left: '80%', top: '3%' }, mobileSize: 54,
    variants: [
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><polygon points="50,6 94,30 94,70 50,94 6,70 6,30" stroke="#1a1814" stroke-width="3" fill="none"/><polygon points="50,22 78,38 78,62 50,78 22,62 22,38" fill="#1a1814"/><text x="50" y="58" text-anchor="middle" font-family="serif" font-size="22" fill="#f5f2ec">✦</text></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><polygon points="50,6 94,30 94,70 50,94 6,70 6,30" fill="#1a1814"/><polygon points="50,22 78,38 78,62 50,78 22,62 22,38" stroke="#f5f2ec" stroke-width="2" fill="none"/><circle cx="50" cy="50" r="8" fill="#c8401a"/></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><polygon points="50,6 94,30 94,70 50,94 6,70 6,30" stroke="#c8401a" stroke-width="2.5" fill="none"/><polygon points="50,6 94,30 94,70 50,94 6,70 6,30" stroke="#1a1814" stroke-width="2.5" fill="none" transform="rotate(30 50 50)"/><circle cx="50" cy="50" r="10" fill="#1a1814"/></svg>`,
    ],
  },
  {
    id: 'd', label: 'Monogram', size: 140, rotate: 0,
    pos:       { left: '44%', top: '28%' },
    mobilePos: { left: '54%', top: '18%' }, mobileSize: 68,
    variants: [
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect x="8" y="8" width="84" height="84" stroke="#1a1814" stroke-width="3" fill="none"/><rect x="18" y="18" width="64" height="64" fill="#1a1814"/><text x="50" y="68" text-anchor="middle" font-family="serif" font-size="40" fill="#f5f2ec" font-weight="bold">A</text></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><circle cx="50" cy="50" r="44" fill="#1a1814"/><text x="50" y="68" text-anchor="middle" font-family="serif" font-size="40" fill="#f5f2ec" font-weight="bold">A</text></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><text x="50" y="72" text-anchor="middle" font-family="serif" font-size="80" fill="none" stroke="#1a1814" stroke-width="2.5" font-weight="bold">A</text></svg>`,
    ],
  },
  {
    id: 'e', label: 'Abstract', size: 82, rotate: 12,
    pos:       { left: '62%', top: '30%' },
    mobilePos: { left: '74%', top: '17%' }, mobileSize: 48,
    variants: [
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><line x1="50" y1="8" x2="50" y2="92" stroke="#1a1814" stroke-width="4.5" stroke-linecap="round"/><line x1="8" y1="50" x2="92" y2="50" stroke="#1a1814" stroke-width="4.5" stroke-linecap="round"/><line x1="20" y1="20" x2="80" y2="80" stroke="#1a1814" stroke-width="4.5" stroke-linecap="round"/><line x1="80" y1="20" x2="20" y2="80" stroke="#1a1814" stroke-width="4.5" stroke-linecap="round"/><circle cx="50" cy="50" r="9" fill="#c8401a"/></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><line x1="50" y1="8" x2="50" y2="92" stroke="#c8401a" stroke-width="4.5" stroke-linecap="round"/><line x1="8" y1="50" x2="92" y2="50" stroke="#c8401a" stroke-width="4.5" stroke-linecap="round"/><circle cx="50" cy="50" r="14" fill="#1a1814"/><circle cx="50" cy="50" r="6" fill="#f5f2ec"/></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><circle cx="50" cy="50" r="42" stroke="#1a1814" stroke-width="2"/><line x1="50" y1="8" x2="50" y2="92" stroke="#1a1814" stroke-width="3" stroke-linecap="round"/><line x1="8" y1="50" x2="92" y2="50" stroke="#1a1814" stroke-width="3" stroke-linecap="round"/></svg>`,
    ],
  },
  {
    id: 'f', label: 'Shield', size: 100, rotate: -6,
    pos:       { left: '78%', top: '26%' },
    mobilePos: { left: '82%', top: '25%' }, mobileSize: 50,
    variants: [
      `<svg viewBox="0 0 100 112" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><path d="M50,6 L92,22 L92,56 Q92,88 50,108 Q8,88 8,56 L8,22 Z" stroke="#1a1814" stroke-width="3" fill="none"/><path d="M50,20 L80,32 L80,56 Q80,78 50,94 Q20,78 20,56 L20,32 Z" fill="#1a1814"/><path d="M36,54 L44,64 L66,42" stroke="#f5f2ec" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
      `<svg viewBox="0 0 100 112" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><path d="M50,6 L92,22 L92,56 Q92,88 50,108 Q8,88 8,56 L8,22 Z" fill="#1a1814"/><circle cx="50" cy="57" r="12" fill="#c8401a"/></svg>`,
      `<svg viewBox="0 0 100 112" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><path d="M50,6 L92,22 L92,56 Q92,88 50,108 Q8,88 8,56 L8,22 Z" stroke="#c8401a" stroke-width="3" fill="none"/></svg>`,
    ],
  },
  {
    id: 'g', label: 'Eye mark', size: 78, rotate: -2,
    pos:       { left: '50%', top: '54%' },
    mobilePos: { left: '50%', top: '33%' }, mobileSize: 42,
    variants: [
      `<svg viewBox="0 0 110 70" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><path d="M6,35 Q55,4 104,35 Q55,66 6,35Z" stroke="#1a1814" stroke-width="3.5" fill="none"/><circle cx="55" cy="35" r="16" fill="#1a1814"/><circle cx="60" cy="30" r="5" fill="#f5f2ec"/></svg>`,
      `<svg viewBox="0 0 110 70" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><path d="M6,35 Q55,4 104,35 Q55,66 6,35Z" fill="#1a1814"/><circle cx="55" cy="35" r="16" fill="#f5f2ec"/><circle cx="55" cy="35" r="7" fill="#c8401a"/></svg>`,
      `<svg viewBox="0 0 110 70" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><path d="M6,35 Q55,4 104,35 Q55,66 6,35Z" stroke="#1a1814" stroke-width="2" fill="none"/><circle cx="55" cy="35" r="9" fill="#1a1814"/></svg>`,
    ],
  },
  {
    id: 'h', label: 'Geometric', size: 108, rotate: 8,
    pos:       { left: '67%', top: '52%' },
    mobilePos: { left: '68%', top: '31%' }, mobileSize: 56,
    variants: [
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect x="10" y="10" width="80" height="80" fill="#1a1814"/><rect x="22" y="22" width="56" height="56" fill="none" stroke="#f5f2ec" stroke-width="2"/><rect x="34" y="34" width="32" height="32" fill="#c8401a"/></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect x="10" y="10" width="80" height="80" fill="none" stroke="#1a1814" stroke-width="3.5"/><rect x="10" y="10" width="80" height="80" fill="none" stroke="#1a1814" stroke-width="3.5" transform="rotate(45 50 50)"/><circle cx="50" cy="50" r="12" fill="#1a1814"/></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect x="10" y="10" width="80" height="80" fill="none" stroke="#c8401a" stroke-width="3"/><rect x="26" y="26" width="48" height="48" fill="#1a1814"/></svg>`,
    ],
  },
  {
    id: 'i', label: 'Sunburst', size: 95, rotate: -10,
    pos:       { left: '63%', top: '72%' },
    mobilePos: { left: '82%', top: '26%' }, mobileSize: 40,
    variants: [
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><line x1="50" y1="6" x2="50" y2="28" stroke="#1a1814" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="72" x2="50" y2="94" stroke="#1a1814" stroke-width="3.5" stroke-linecap="round"/><line x1="6" y1="50" x2="28" y2="50" stroke="#1a1814" stroke-width="3.5" stroke-linecap="round"/><line x1="72" y1="50" x2="94" y2="50" stroke="#1a1814" stroke-width="3.5" stroke-linecap="round"/><line x1="20" y1="20" x2="36" y2="36" stroke="#1a1814" stroke-width="3.5" stroke-linecap="round"/><line x1="64" y1="64" x2="80" y2="80" stroke="#1a1814" stroke-width="3.5" stroke-linecap="round"/><line x1="80" y1="20" x2="64" y2="36" stroke="#1a1814" stroke-width="3.5" stroke-linecap="round"/><line x1="36" y1="64" x2="20" y2="80" stroke="#1a1814" stroke-width="3.5" stroke-linecap="round"/><circle cx="50" cy="50" r="17" fill="#1a1814"/><circle cx="50" cy="50" r="8" fill="#f5f2ec"/></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><circle cx="50" cy="50" r="20" fill="#c8401a"/><line x1="50" y1="6" x2="50" y2="28" stroke="#1a1814" stroke-width="2.5" stroke-linecap="round"/><line x1="50" y1="72" x2="50" y2="94" stroke="#1a1814" stroke-width="2.5" stroke-linecap="round"/><line x1="6" y1="50" x2="28" y2="50" stroke="#1a1814" stroke-width="2.5" stroke-linecap="round"/><line x1="72" y1="50" x2="94" y2="50" stroke="#1a1814" stroke-width="2.5" stroke-linecap="round"/></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><circle cx="50" cy="50" r="16" stroke="#1a1814" stroke-width="3" fill="#f5f2ec"/><circle cx="50" cy="50" r="6" fill="#1a1814"/></svg>`,
    ],
  },
  {
    id: 'j', label: 'Triangle', size: 88, rotate: 5,
    pos:       { left: '46%', top: '74%' },
    hideOnMobile: true,
    variants: [
      `<svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><polygon points="50,6 94,84 6,84" stroke="#1a1814" stroke-width="3.5" fill="none"/><polygon points="50,28 76,76 24,76" fill="#1a1814"/></svg>`,
      `<svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><polygon points="50,6 94,84 6,84" fill="#1a1814"/><polygon points="50,30 76,78 24,78" fill="#c8401a"/></svg>`,
      `<svg viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><polygon points="50,6 94,84 6,84" stroke="#1a1814" stroke-width="3" fill="none"/><circle cx="50" cy="56" r="8" fill="#1a1814"/></svg>`,
    ],
  },
  {
    id: 'k', label: 'Mountain', size: 110, rotate: 0,
    pos:       { left: '79%', top: '70%' },
    hideOnMobile: true,
    variants: [
      `<svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><polygon points="50,6 88,74 12,74" fill="#1a1814"/><polygon points="18,74 44,28 70,74" fill="#c8401a" opacity="0.9"/><line x1="6" y1="74" x2="94" y2="74" stroke="#1a1814" stroke-width="3.5" stroke-linecap="round"/></svg>`,
      `<svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><polygon points="50,6 88,74 12,74" stroke="#1a1814" stroke-width="3.5" fill="none"/><line x1="6" y1="74" x2="94" y2="74" stroke="#1a1814" stroke-width="3.5" stroke-linecap="round"/></svg>`,
      `<svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><polygon points="70,8 96,72 44,72" fill="#1a1814"/><polygon points="30,20 56,72 4,72" fill="#c8401a"/></svg>`,
    ],
  },
  {
    id: 'l', label: 'Minimal', size: 64, rotate: 0,
    pos:       { left: '84%', top: '55%' },
    hideOnMobile: true,
    variants: [
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><line x1="20" y1="25" x2="80" y2="25" stroke="#1a1814" stroke-width="5" stroke-linecap="round"/><line x1="20" y1="50" x2="80" y2="50" stroke="#1a1814" stroke-width="5" stroke-linecap="round"/><line x1="20" y1="75" x2="50" y2="75" stroke="#c8401a" stroke-width="5" stroke-linecap="round"/></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><line x1="20" y1="25" x2="80" y2="25" stroke="#1a1814" stroke-width="5" stroke-linecap="round"/><line x1="50" y1="25" x2="50" y2="80" stroke="#1a1814" stroke-width="5" stroke-linecap="round"/></svg>`,
      `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect x="18" y="18" width="64" height="64" rx="32" stroke="#1a1814" stroke-width="5" fill="none"/><line x1="18" y1="50" x2="82" y2="50" stroke="#c8401a" stroke-width="4"/></svg>`,
    ],
  },
]
