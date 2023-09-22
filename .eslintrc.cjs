/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  env: {
    es2022: true,
    browser: true,
  },
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.node.json'], // Allows for the use of rules which require parserServices to be generated
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/array-type': [
      'error',
      { default: 'generic', readonly: 'generic' },
    ],
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignorePrimitives: {
          bigint: false,
          boolean: true,
          number: false,
          string: false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
    ],
    '@typescript-eslint/no-misused-promises': [
      2,
      { checksVoidReturn: { attributes: false } },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        leadingUnderscore: 'allow',
        custom: {
          regex: '^(T|\\$)[A-Z][a-zA-Z]+[0-9]*$',
          match: true,
        },
      },
    ],
  },
  ignorePatterns: [
    '**/.eslintrc.cjs',
    '**/*.config.ts',
    '**/*.config.js',
    '**/*.config.cjs',
    'dist',
    'package-lock.json',
  ],
  reportUnusedDisableDirectives: true,
};
