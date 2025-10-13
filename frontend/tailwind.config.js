/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tetris-cyan': '#00f0f0',
        'tetris-blue': '#0000f0',
        'tetris-orange': '#f0a000',
        'tetris-yellow': '#f0f000',
        'tetris-green': '#00f000',
        'tetris-purple': '#a000f0',
        'tetris-red': '#f00000',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}

