/** @type {import('stylelint').Config} */
module.exports = {
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'layer',
          'apply',
          'config',
          'theme',
          'plugin',
          'variants',
          'responsive',
          'screen',
          'source'
        ]
      }
    ],
    'no-empty-source': null
  },
  ignoreFiles: ['dist/**/*', 'node_modules/**/*']
}
