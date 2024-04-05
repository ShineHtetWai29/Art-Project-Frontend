/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/images/background.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      width:{
        '1271': '1271px',
        '580' : '580px',
        '500' : '500px',
        '1010' : '1010px',
        '300' : '300px',
      },

      height:{
        '394' : '394px',
         '190' : '190px',
         '445' : '445px',
      },
      
      fontFamily: {
        'muli':['Mulish','sans-serif'],
        'robotoSlap' : ['Roboto Slab','sans-serif'],
        'stardos' : ['Stardos Stencil','sans-serif'],
        'inter' : ['Inter','sans-serif'],


      },
      colors : {
        'primary' : '#99BC85',
        'secondary' : '#D9EDBF',
        'warning' : '#F4DD0F',
        'success' : '#25AC0F',
        'blood' : '#e71b18'
      }
      
    },
  },
  plugins: [],
}