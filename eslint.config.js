import { defineConfig } from "eslint/config";
import eslintConfigCodely from "eslint-config-codely";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

export default defineConfig([
  ...eslintConfigCodely.full,
  {
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto", printWidth: 120, useTabs: false, tabWidth: 2 }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "import/no-unresolved": "off",
      "import/no-duplicates": "off",
    },
  },
  {
    files: ["**/*.tsx"],
    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "app/app.css",
      },
    },
    rules: {
      // enable all recommended rules to warn
      ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
      // enable all recommended rules to error
      ...eslintPluginBetterTailwindcss.configs["recommended-error"].rules,
      "better-tailwindcss/enforce-consistent-line-wrapping": "off",
    },
  },
]);
