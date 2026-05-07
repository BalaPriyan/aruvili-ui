const { colors, spacing, radius } = require('../tokens');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        background: colors.background,
        foreground: colors.foreground,
        border: colors.border,
      },
      spacing: spacing,
      borderRadius: radius,
    },
  },
  plugins: [],
};
