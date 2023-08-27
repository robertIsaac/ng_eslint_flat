import tsParser from '@typescript-eslint/parser';
import ngParser from '@angular-eslint/template-parser';

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
    }
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: ngParser,
    }
  },
];
