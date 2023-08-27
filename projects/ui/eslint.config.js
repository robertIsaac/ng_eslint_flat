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
  }
];
