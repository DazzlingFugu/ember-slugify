module.exports = {
  root: true,
  extends: [
    'peopledoc/ember-addon'
  ],

  overrides: [
    {
      files: ['tests/test-helper.js'],
      rules: {
        'import/no-relative-parent-imports': 0
      }
    }
  ]
}
