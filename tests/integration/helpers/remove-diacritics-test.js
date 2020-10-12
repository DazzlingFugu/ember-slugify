import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Helper | remove-diacritics', function(hooks) {
  setupRenderingTest(hooks)

  test('it removes diacritics', async function(assert) {
    await render(hbs`{{remove-diacritics ''}}`)
    assert.dom().hasText('')
    await render(hbs`{{remove-diacritics 'é è à ù ç č Ž ñ'}}`)
    assert.dom().hasText('e e a u c c Z n')
  })

})
