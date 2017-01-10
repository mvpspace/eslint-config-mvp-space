module.exports = {
  extends: [
	'airbnb',
	'plugin:meteor/recommended',
  ],
  plugins: [
	'meteor',
  ],
  parser: 'babel-eslint',
  rules: {
    'class-methods-use-this': [1],
    'func-names': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': [
      2,
      { ignore: ['^[/]'] },
    ],
    'import/no-absolute-path': [0],
    'import/extensions': [0],
    'jsx-a11y/no-static-element-interactions': [1],
    'jsx-a11y/anchor-has-content': [1],
    'meteor/audit-argument-checks': 'off',
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    'no-underscore-dangle': 'off',
    'no-unused-prop-types': [0, { skipShapeProps: true }],
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: false
      }
    ],
    'react/no-unused-prop-types': [0],
    'react/jsx-filename-extension': [
       1,
       { extensions: ['.js'] },
     ],
  },
  ecmaFeatures: {
    classes: true,
  },
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": "meteor"
  },
};
