const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.html', './src/js/**/*.js'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      secondary: '#ff3713',
      blue: {
        DEFAULT: '#2181ff',
        50: '#d5edf65e',
      },
      grey: colors.neutral,
      pink: colors.fuchsia,
      green: {
        '100': '#94ffcd',
        '300': '#0ca55f',
        '500': '#006f3c',
        '700': '#004425',
        '900': '#002a17',
      },
      orange: {
        DEFAULT: '#CC3300',
        'default': '#CC3300',
        '100': '#ffcfa2',
        '300': '#ffb672',
        '500': '#DF8330',
        '700': '#a0530f',
        '900': '#6d3100',
      },
      yellow: {
        DEFAULT: '#FACC15',
        'default': '#FACC15',
        '400': '#FACC15',
        '500': '#EAB308',
        '900': '#713F12',
      },

    },
    fontFamily: {
      title: ['Rubik Mono One', 'sans-serif'],
      body: ['Roboto Mono', 'monospace']
    },

    extend: {
      zIndex: {
        '1': '1',
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1800px'
      },

      spacing: {
        '45p':'45%',
        '65vh':'65vh',
      }

    },

    variants: {
      extend: {
      },
    },
    plugins: [
      plugin(function ({addComponents}) {
          const components = {
              '.x-center': {
                  left: '50%',
                  transform: 'translateX(-50%)'
              },
              '.y-center': {
                  top: '50%',
                  transform: 'translateY(-50%)'
              },
              '.abs-center': {
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
              }
          }
          addComponents(components)
      })
  ]

  }
}
