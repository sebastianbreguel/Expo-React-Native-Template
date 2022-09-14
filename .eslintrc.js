module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    semi: ["error", "always"],
    eqeqeq: "off",
    "react/jsx-no-bind": "off",
    "react/no-deprecated": "error",
    "no-console": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  settings: {
    react: {
      version: "18.0",
    },
  },
};
