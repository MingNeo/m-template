// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'{{if flow}},
    "flowtype",
    "flowtype-errors"{{/if}}
  ],
  // add your custom rules here
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0{{if flow}},
    'flowtype-errors/show-errors': 2{{/if}}
  }
}
