/** @type {import('tailwindcss').Config} */
// Styling convention:
//   - NativeWind (className) → layout, spacing, typography utilities
//   - React Native Paper → interactive components (Button, TextInput, Card, etc.)
// Keep design tokens in sync: customize theme.extend below to mirror your Paper theme colors.
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
