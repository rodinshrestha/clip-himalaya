import baseConfig from '@rodinshrestha/prettier-config/next';

module.exports = {
  ...baseConfig,
  printWidth: 80,
  bracketSameLine: false,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'always',
};
