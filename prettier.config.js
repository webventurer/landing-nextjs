/** @type {import('prettier').Config} */
const config = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',

  overrides: [
    {
      files: '*.mdx',
      options: {
        requirePragma: true, // Only format if file has @format comment
      },
    },
  ],
};

module.exports = config;
