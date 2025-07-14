import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
    { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
    {
        rules: {
            quotes: ["error", "double"],
            indent: ["error", 4, { "SwitchCase": 1 }],
            semi: ["error", "always"],
            "eol-last": ["error", "always"]
        }
    }
]);
