import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Helper | slugify', function (hooks) {
  setupRenderingTest(hooks)

  test('it slugifies', async function (assert) {
    await render(hbs`{{slugify ''}}`)
    assert.dom().hasText('')
    await render(hbs`{{slugify 'bonjour'}}`)
    assert.dom().hasText('bonjour')
    await render(hbs`{{slugify 'annyǒng hashimnikka'}}`)
    assert.dom().hasText('annyong-hashimnikka')
    await render(hbs`{{slugify 'Bon jOuR Töi 1337   '}}`)
    assert.dom().hasText('bon-jour-toi-1337')
  })
})
