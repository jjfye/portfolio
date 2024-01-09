import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        "moving-arrow": "moving-arrow 0.5s infinite",
      },
      
      keyframes: {
        "moving-arrow": {
          "0%, 100%": {
            transform: "translateX(5px) translateY(5px)",
          },
          "50%": {
            transform: "translateX(0) translateY(0)",
          },
        },
      }
    },
  },
  plugins: [],
}
export default config
