module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/style-prop-object': 0,
    'no-use-before-define': 0,
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    'react/no-unstable-nested-components': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/jsx-boolean-value': 0,
    },
};
