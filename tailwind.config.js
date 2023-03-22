/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body-color': "#1f3757",
        'score-color': "#2A45C2",
        'number-color': "#565468",
        'paper-outer1': "#2A45C2",
        'paper-outer2': "#4664F4",
        'scissors-outer1': "#C76C1B",
        'scissors-outer2': "#EB9F0E",
        'rock-outer1': "#9D1634",
        'rock-outer2': "#DB2E4D",
        outer3: "#BABFD4",
        outer4: "#F3F3F3",
        'rule-color': "#FFFFFF"
      }
    },
    fontFamily: {
      sans: ["Barlow Semi Condensed", "sans-serif"],
    },
    fontSize: {
      sm: ['16px', {
        lineHeight: '19px',
        letterSpacing: '2.5px',
        fontWeight: '600',
        }],
      lg: ['64px', {
        lineHeight: '64px',
        fontWeight: '700',
      }]
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      }
    }
  },
  plugins: [],
}
