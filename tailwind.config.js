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
        "moon": "https://img.freepik.com/free-vector/vector-vibrant-neon-circle-with-glow_87202-1037.jpg?w=1380&t=st=1667815388~exp=1667815988~hmac=19eac25380491733b2ffb3f5a800f7eebb5bcc725bd2fd61b8074c0f2f9b625d')",
      },

    fontFamily: {
        'roboto': ['/src/assets/fonts/Roboto/Roboto-Medium.ttf'],
      },
    },
    plugins: [],
  }
