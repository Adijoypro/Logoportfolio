/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink:    '#1a1814',
        paper:  '#f5f2ec',
        warm:   '#ede9e0',
        accent: '#c8401a',
        muted:  '#8c8880',
        border: 'rgba(26,24,20,0.12)',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      letterSpacing: {
        widest2: '0.16em',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        expo:   'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse2: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(76,175,80,0.4)' },
          '70%':      { boxShadow: '0 0 0 7px rgba(76,175,80,0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        slideDown: {
          '0%':   { transform: 'translateY(-100%)', opacity: '0' },
          '30%':  { opacity: '0.4' },
          '100%': { transform: 'translateY(100%)',  opacity: '0' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.5s ease forwards',
        'pulse-dot': 'pulse2 2s infinite',
        'marquee':   'marquee 22s linear infinite',
        'scroll':    'slideDown 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
