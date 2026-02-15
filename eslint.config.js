import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [ 
      "dist", 
      "src/shared/api/queries.schemas.ts", 
      "src/shared/api/queries.ts",
      "src/@types/resource.d.ts",
      "src/components/*",
      "src/hooks/*",
    ], 
  },
  {
    extends: [ js.configs.recommended, ...tseslint.configs.recommended ],
    files: [ "**/*.{ts,tsx,js,jsx}" ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@stylistic": stylistic,
      "simple-import-sort": simpleImportSort,
      react: reactPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/jsx-key": "error",
      "no-multiple-empty-lines": [ "error",{ max: 1 } ],
      "@stylistic/indent": [ "error", 2 ],
      "@stylistic/quotes": [ "error", "double" ],
      "@stylistic/semi": [ "error", "always" ],
      "@stylistic/object-curly-spacing": [ "error", "always" ],
      "@stylistic/key-spacing": [ "error", { 
        "mode": "strict", 
        "beforeColon": false, 
        "afterColon": true,
      } ],
      "@stylistic/comma-dangle": [ "error", "always-multiline" ],
      "@stylistic/object-curly-spacing": [ "error", "always" ],
      "@stylistic/array-bracket-spacing": [ "error", "always" ],
      "@stylistic/max-len": [ "error", {
        "code": 120,
        "tabWidth": 2,
      } ],
      "@stylistic/jsx-closing-tag-location": [ "error", "line-aligned" ],
      "@stylistic/jsx-closing-bracket-location": [ "error", "tag-aligned" ],
      "@stylistic/jsx-curly-spacing": [ 2, { "when": "always" } ],
      "@stylistic/jsx-quotes": [ "error", "prefer-double" ],
      "@stylistic/jsx-indent-props": [ 2, { indentMode: 2 } ],
      "@stylistic/jsx-equals-spacing": [ "error", "never" ],
      "@stylistic/jsx-sort-props": [ 1, { 
        multiline: "last",
        reservedFirst: [ "key" ], 
      } ],
      "@stylistic/jsx-max-props-per-line": [ 1, { "when": "multiline" } ],
      "@stylistic/jsx-first-prop-new-line": [ "error", "multiline" ],
      "@stylistic/jsx-tag-spacing": [ "error", { beforeClosing: "never" } ],
      "@stylistic/member-delimiter-style": [ "error" ],
      "@stylistic/newline-per-chained-call": [ "error" ],
      "@stylistic/no-multi-spaces": [ "error" ],
      "@stylistic/curly-newline": [ "error", "always" ],
      "@stylistic/object-curly-newline": [ "error", { "multiline": true } ],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
);
