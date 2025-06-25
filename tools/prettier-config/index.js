/** @typedef {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  tailwindFunctions: ["cva", "cn"],
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
}

export default config
