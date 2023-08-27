import rootConfig from '../../eslint.config.js'
export default [
  ...rootConfig,
  {
    "files": ["**/*.ts"],
    languageOptions: {
      "parserOptions": {
        tsconfigRootDir: "projects/ui",
        project: [
          "tsconfig.lib.json",
          "tsconfig.spec.json"
        ]
      },
    },
    "rules": {
      "@angular-eslint/directive-selector": [
        "error",
        {
          "type": "attribute",
          "prefix": "lib",
          "style": "camelCase"
        }
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          "type": "element",
          "prefix": "lib",
          "style": "kebab-case"
        }
      ]
    }
  }
];
