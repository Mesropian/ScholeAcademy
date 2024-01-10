import type { Config } from 'tailwindcss'

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': {'max': '1400px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '992px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},  
      },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui()],
}
export default config
