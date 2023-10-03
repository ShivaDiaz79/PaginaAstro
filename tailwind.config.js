/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  images: {
    domains: ['res.cloudinary.com'],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite', // Define una animación llamada 'bounce-slow' con una duración de 2 segundos.
      },
      fontSize: {
        '14xl': '250px', // Ajusta el tamaño de fuente en píxeles para que sea aproximadamente equivalente a 14 centímetros en una pantalla estándar.
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'], 
         rubik: ['Rubik', 'sans-serif'],

      },
    },
  },
  plugins: [

    require('flowbite-typography'),
  ],
}
