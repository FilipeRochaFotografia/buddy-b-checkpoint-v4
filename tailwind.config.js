/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9B80FF',
          dark: '#583CE3',
        },
        secondary: {
          DEFAULT: '#F3F4F6',
        },
        success: {
          DEFAULT: '#20CE66',
          light: '#DEFFEB',
        },
        alert: {
          DEFAULT: '#FFD400',
          light: '#FFF8D8',
        },
        error: {
          DEFAULT: '#FF4901',
          light: '#FFE6DD',
        },
        text: {
          title: '#424242',
          body: '#666666',
          muted: '#A2A2A2',
        },
        background: {
          DEFAULT: '#F3F4F6',
          paper: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['Cy', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        'pill': '30px',
        'card': '12px',
        'tag': '15px',
      },
      boxShadow: {
        'system': '0 4px 20px rgba(0, 0, 0, 0.08)', // Sombra mais moderna/suave
        'float': '0 10px 30px rgba(155, 128, 255, 0.2)', // Sombra roxa para destaque
      }
    },
  },
  plugins: [],
}