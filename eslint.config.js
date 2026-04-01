// @ts-check
import eslintConfigExpo from "eslint-config-expo/flat.js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default [
  ...eslintConfigExpo,
  eslintConfigPrettier,
  eslintPluginPrettier,
  {
    ignores: ["node_modules/", "dist/", ".expo/", "babel.config.js"],
  },
];
