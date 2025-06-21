import { config as baseConfig } from "./base.js";
import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * A custom ESLint configuration for libraries that typescript.
 * @type {import("eslint").Linter.Config}
 */
export const libraryConfig = [
  ...baseConfig,
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        // ...globals.jest,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
    },
  },
];
