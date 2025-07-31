import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "react/jsx-no-duplicate-props": "off",
      "no-var": "off",
      "prefer-const": "off",
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-unused-expressions": "off",
      "no-unused-labels": "off",
      "no-unused-imports": "off",
      "no-unused-imports-ts": "off",
    },
  },
];

export default eslintConfig;
