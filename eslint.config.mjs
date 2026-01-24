import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
            "react/no-unescaped-entities": "off",
            "@next/next/no-img-element": "off",
            "prefer-const": "error",
            "no-console": ["warn", { "allow": ["warn", "error"] }]
        }
    },
    {
        ignores: ["node_modules/", ".next/"]
    }
]);

export default eslintConfig;
