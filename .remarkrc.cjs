module.exports = {
  plugins: [
    require('remark-preset-lint-recommended'),
    require('remark-mdx'),
    [require('remark-lint-code-block-style'), 'fenced'],
    [require('remark-lint-fenced-code-marker'), '`'],
    [require('remark-lint-fenced-code-flag'), 'consistent'],
  ],
};
