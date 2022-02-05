module.exports = {
  content: ['./src/**/*.html', './src/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Rubik Mono One', 'sans-serif'],
        body: ['Roboto Mono', 'monospace']
      },
      
      boxShadow: {
        shadow: '5px 5px 0 rgba(0, 0, 0, 1)',
      },

      colors:{
          yellow:{
            default:'',
            50:'#fbff0078'
          },
          blue:{},
          pink:{},
          green:{},
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],  
}
