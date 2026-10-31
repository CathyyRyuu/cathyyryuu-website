import type { Config } from 'tailwindcss'

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-rounded', 'sans-serif'],
        hand: ['var(--font-hand)', 'ui-rounded', 'sans-serif'],
      },
      boxShadow: {
        // Soft offset shadow, like a sticker or postcard laid on paper.
        card: '4px 5px 0 rgba(74, 59, 46, 0.10)',
        'card-hover': '6px 8px 0 rgba(74, 59, 46, 0.14)',
        button: '0 4px 0 #3f5e2c',
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      // Storybook palette inspired by cozy travel-journal games.
      paper: {
        DEFAULT: '#f5eedc',
        soft: '#fbf7ec',
        deep: '#ebe1c8',
      },
      ink: {
        DEFAULT: '#4a3b2e',
        soft: '#6b5a49',
        faint: '#8f7d68',
      },
      line: '#ddd0b5',
      // Buttons, selected states and highlights (moss green). A warm denim
      // blue alternative: #4a729e / #345779 / #a7c0dc / #e2eaf4.
      accent: {
        DEFAULT: '#6f9a54',
        deep: '#4f7438',
        light: '#a8c98a',
        pale: '#e4eed4',
      },
      pond: {
        DEFAULT: '#8fbcc6',
        deep: '#4d7f8a',
        pale: '#dcecef',
      },
      clay: {
        DEFAULT: '#d98f52',
        deep: '#a9622c',
        pale: '#f7e2cb',
      },
    },
  },
  plugins: [],
}
export default config
