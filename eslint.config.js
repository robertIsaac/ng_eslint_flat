import tsParser from '@typescript-eslint/parser';
import ngParser from '@angular-eslint/template-parser';
import js from '@eslint/js';
import globals from 'globals';
import ts from '@typescript-eslint/eslint-plugin';
import ng from '@angular-eslint/eslint-plugin';
import ngTeplate from '@angular-eslint/eslint-plugin-template';
import esImport from 'eslint-plugin-import';

export default [
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': ts,
      '@angular-eslint': ng,
      import: esImport,
    },
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        project: ['tsconfig.app.json', 'tsconfig.spec.json'],
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs['recommended-requiring-type-checking'].rules,
      ...ts.configs['stylistic-type-checked'].rules,
      ...ng.configs.recommended.rules,
      ...esImport.configs.errors.rules,
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],
      'import/no-unresolved': 'off',
      'import/newline-after-import': 'error',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      '@angular-eslint/template': ngTeplate,
    },
    languageOptions: {
      parser: ngParser,
    },
    rules: {
      ...ngTeplate.configs.recommended.rules,
      ...ngTeplate.configs.accessibility.rules,
    },
  },
  {
    files: ['**/*.spec.ts'],
    languageOptions: {
      globals: {
        ...globals.jasmine,
      },
    },
  },
];
