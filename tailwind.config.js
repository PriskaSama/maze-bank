/** @type {import('tailwindcss').Config} */

const { slate } = require('tailwindcss/colors');
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'neonblue': '#65cbe9',
      white: '#ffffff',
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
    },
    
    backgroundImage: {
        "moon": "url('https://img.freepik.com/free-vector/mountain-landscape-with-waterfall-night_107791-7316.jpg?w=2000&t=st=1667748216~exp=1667748816~hmac=e00d25034f56c885aa78922491b4c10440449378ee4db5818044788e21cde0aa')",
      },

    fontFamily: {
        'roboto': ['/src/assets/fonts/Roboto/Roboto-Medium.ttf'],
      },
    },
    plugins: [],
  }
