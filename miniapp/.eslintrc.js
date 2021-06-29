module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint', // 样式规范以 prettier 为准
    'plugin:prettier/recommended' // 样式规范以 prettier 为准
  ],
  rules: {
    'prettier/prettier': 1,
    'no-console': 0,
    eqeqeq: 0,
    'prefer-const': [
      'error',
      { destructuring: 'all', ignoreReadBeforeAssign: true }
    ],
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-triple-slash-reference': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { path: 'always', types: 'never', lib: 'never' }
    ]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
