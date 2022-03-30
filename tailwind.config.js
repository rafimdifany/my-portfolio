module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'move' : 'move 5s ease-in-out infinite alternate'
      },
      keyframes: {
        move : {
          '50%' : {transform: 'translateY(-3rem)'},
          '100%' : {transform: 'translateY(-6rem)'}
        }
      }
    },
  },
  plugins: [],
}
