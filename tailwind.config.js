import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: "#F5A524",
            secondary: "#e879f9",
            background:"#F4F4F5"
          }
        },
        dark: {
          colors: {
            primary: "#d97706",
            secondary: "#7e22ce",
            background: "#0f172a"
          }
        },
      },
    })
  ],
}
