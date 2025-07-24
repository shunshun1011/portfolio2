/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwindを適用したいファイル群を指定
  content: [
    "./app.vue", // <= ドキュメントからさらに追加
    //"./components/**/*.{vue,js}",
    //"./layouts/**/*.vue",
    //"./pages/**/*.vue",
    //"./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        50: "#f6f7f6",
        100: "#ebeeea",
        200: "#d5ddd5",
        300: "#a6b5a5",
        400: "#8d9d8b",
        500: "#6a7e69",
        600: "#556554",
        700: "#455144",
        800: "#394338",
        900: "#2f382f",
        950: "#171c17",
      },
      secondary: {
        50: "#fbf6ef",
        100: "#f4ebda",
        200: "#e4cda3",
        300: "#d6b173",
        400: "#cc9853",
        500: "#c27e3e",
        600: "#ab6334",
        700: "#8e4a2f",
        800: "#753c2b",
        900: "#613226",
        950: "#371811",
      },
      tertiary: {
        50: "#f7f7f6",
        100: "#e5e5e2",
        200: "#cacbc4",
        300: "#a7a99f",
        400: "#83867b",
        500: "#686b61",
        600: "#52554c",
        700: "#44463f",
        800: "#383a35",
        900: "#262724",
        950: "#1a1b18",
      },
      red: {
        50: "#fff0f0",
        100: "#ffdddd",
        200: "#ffc0c0",
        300: "#ff9494",
        400: "#ff5757",
        500: "#ff2323",
        600: "#ff0000",
        700: "#d70000",
        800: "#b10303",
        900: "#920a0a",
        950: "#500000",
      },
      logo: {
        50: "#f0f7fe",
        100: "#ddedfc",
        200: "#c2e0fb",
        300: "#98cdf8",
        400: "#68b1f2",
        500: "#4592ec",
        600: "#2f76e1",
        700: "#2761ce",
        800: "#254fa8",
        900: "#1e3a70",
        950: "#1a2c51",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
}
