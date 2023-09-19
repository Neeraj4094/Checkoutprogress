/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        // screen:440px
  
        'ssm':'490px',
  
        '2xl': '1436px',
      },
      fontFamily: {
        'jost':'Jost', 
      },
    },
  },
  plugins: [],
}

