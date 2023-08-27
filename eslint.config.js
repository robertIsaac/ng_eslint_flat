import tsParser from '@typescript-eslint/parser';
import ngParser from '@angular-eslint/template-parser';
import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser
      }
    },
    rules: {
      ...js.configs.recommended.rules,
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
