module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/comma-spacing': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/quotes': ['error', 'single', 'avoid-escape'],
    '@typescript-eslint/semi': 'error',
    'array-bracket-spacing': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { 'mode': 'strict', 'beforeColon': false, 'afterColon': true }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
  },
}
