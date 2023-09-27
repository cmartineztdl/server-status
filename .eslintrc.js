module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    ignorePatterns: ['node_modules/*', 'build/*', 'src/**/*.spec.ts', 'jest.config.ts'],
    overrides: [
      {
        files: ['src/**/*.ts'],
        extends: ['plugin:@typescript-eslint/recommended'],
      },
    ],
  };
