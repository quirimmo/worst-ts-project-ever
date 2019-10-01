module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {},
  };