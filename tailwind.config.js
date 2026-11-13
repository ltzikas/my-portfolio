/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F1F5F9',
          dark: '#0F172A',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1E293B',
        },
        primary: {
          light: '#2563EB',
          dark: '#60A5FA',
          hover: {
            light: '#1d4ed8', // hover para light
            dark: '#3b82f6',  // hover para dark (ejemplo)
          }
        },
        accent: {
          light: '#F59E42',
          dark: '#FBBF24',
        },
        text: {
          light: '#1E293B',
          dark: '#F1F5F9',
        },
        muted: {
          light: '#64748B',
          dark: '#94A3B8',
        },
        border: {
          light: '#E2E8F0',
          dark: '#334155',
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
