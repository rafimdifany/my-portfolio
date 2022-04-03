module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    colors : {
      primary: '#14b8a6',
      secondary: '#0f172a',
      white: '#f1f5f9'
    },
    extend: { 
      animation: {
        'move' : 'move 5s ease-in-out infinite alternate',
        'left-to-right' : 'left-to-right 0.5s ease-in-out',
        'right-to-left' : 'right-to-left 0.5s ease-in-out',
        'fade-in' : 'fade-in 0.5s ease-in-out'
      },
      keyframes: {
        'move' : {
          '10%' : {transform: 'translateY(0)'},
          '50%' : {transform: 'translateY(-32px)'},
          '100%' : {transform: 'translateY(-66px)'}
        },
        'left-to-right' : {
          '0%' : {transform: 'translateX(-3rem)', opacity:'0'},
          '100%' : {transform: 'translateX(0)', opacity: '1'}
        },

        'right-to-left' : {
          '0%' : {transform: 'translateX(3rem)', opacity:'0'},
          '100%' : {transform: 'translateX(0)', opacity: '1'}
        },
        'fade-in' : {
          '0%' : {opacity: '0'},
          '100%' : {opacity: '1'}
        }
      }
    },
  },
  plugins: [],
}
