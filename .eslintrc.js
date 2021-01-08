module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  plugins: ['prettier', '@typescript-eslint', 'react-hooks'],
  extends: [
    'react-app',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  globals: {
    $: true,
    __DEV__: true,
    driver: true,
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/indent': 0,
    'no-use-before-define': [0],
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 0,
    semi: ['error', 'never'],
    indent: [2, 2, { SwitchCase: 1, offsetTernaryExpressions: true }],
    quotes: ['error', 'single', { avoidEscape: true }],
  },
}
