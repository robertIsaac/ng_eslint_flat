import tsParser from '@typescript-eslint/parser';
import ngParser from '@angular-eslint/template-parser';
import js from '@eslint/js';
import globals from 'globals';
import ts from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ["**/*.ts"],
    plugins: {
      '@typescript-eslint': ts,
    },
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser
      },
      parserOptions: {
        project: [
          "tsconfig.app.json",
          "tsconfig.spec.json"
        ]
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs['recommended-requiring-type-checking'].rules,
      ...ts.configs['stylistic-type-checked'].rules,
    }
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: ngParser,
    }
  },
  {
    files: ["**/*.spec.ts"],
    languageOptions: {
      globals: {
        ...globals.jasmine,
      }
    }
  },
];
