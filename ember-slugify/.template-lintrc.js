'use strict'

module.exports = {
  extends: ['recommended', 'stylistic'],

  rules: {
    'attribute-indentation': {
      indentation: 2,
      'open-invocation-max-len': 100,
    },

    'inline-link-to': 'error',

    'no-bare-strings': 'error',

    'no-class-bindings': 'error',

    'no-element-event-actions': 'error',

    'no-link-to-tagname': 'error',

    'no-model-argument-in-route-templates': 'error',

    'no-this-in-template-only-components': 'error',

    'no-yield-to-default': 'error',

    'require-form-method': 'warn',
  },
}
