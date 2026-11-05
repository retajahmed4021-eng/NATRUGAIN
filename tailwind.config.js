export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { sage: '#A5B395', forest: '#34452E', cream: '#F7F3E8', beige: '#E8DEC9', gold: '#B89A68', ink: '#292B23' },
      fontFamily: { serif: ['"Cormorant Garamond"', 'Georgia', 'serif'], sans: ['Manrope', 'system-ui', 'sans-serif'] },
      boxShadow: { soft: '0 10px 30px -12px rgba(52,69,46,.25)' }
    }
  },
  plugins: []
}
