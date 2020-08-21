import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Helper | slugify', function(hooks) {
  setupRenderingTest(hooks)

  test('it slugifies', async function(assert) {
    await render(hbs`{{slugify ''}}`)
    assert.equal(this.element.textContent.trim(), '')
    await render(hbs`{{slugify 'bonjour'}}`)
    assert.equal(this.element.textContent.trim(), 'bonjour')
    await render(hbs`{{slugify 'annyǒng hashimnikka'}}`)
    assert.equal(this.element.textContent.trim(), 'annyong-hashimnikka')
    await render(hbs`{{slugify 'Bon jOuR Töi 1337   '}}`)
    assert.equal(this.element.textContent.trim(), 'bon-jour-toi-1337')
  })

})
