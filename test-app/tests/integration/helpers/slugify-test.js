import { module, test } from 'qunit'
import { setupRenderingTest } from 'test-app/tests/helpers'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Helper | slugify', function (hooks) {
  setupRenderingTest(hooks)

  test('it slugifies', async function (assert) {
    await render(hbs`{{slugify undefined}}`)
    assert.dom().hasText('')
    await render(hbs`{{slugify ""}}`)
    assert.dom().hasText('')
    await render(hbs`{{slugify "bonjour"}}`)
    assert.dom().hasText('bonjour')
    await render(hbs`{{slugify "annyǒng hashimnikka"}}`)
    assert.dom().hasText('annyong-hashimnikka')
    await render(hbs`{{slugify "Bon jOuR Töi 1337  : () ?  "}}`)
    assert.dom().hasText('bon-jour-toi-1337')
    await render(hbs`{{slugify "I ♥ New York"}}`)
    assert.dom().hasText('i-love-new-york')
  })

  test('it slugifies with options', async function (assert) {
    await render(hbs`{{slugify "Bon jOuR Töi 1337" (hash replacement="#")}}`)
    assert.dom().hasText('bon#jour#toi#1337')
    await render(hbs`{{slugify "Bon jOuR Töi 1337" (hash lower=false)}}`)
    assert.dom().hasText('Bon-jOuR-Toi-1337')
    await render(hbs`{{slugify "vive l'♥" (hash locale="fr")}}`)
    assert.dom().hasText('vive-lamour')
    await render(hbs`{{slugify "vive l'♥" (hash locale="fr-CA")}}`)
    assert.dom().hasText('vive-lamour')
    await render(hbs`{{slugify "vive l'♥" (hash locale="fr_CA")}}`)
    assert.dom().hasText('vive-lamour')
    // the strict option is ignored on purpose
    await render(hbs`{{slugify "Bon jOuR Töi 1337  : () ?  " (hash strict=false)}}`)
    assert.dom().hasText('bon-jour-toi-1337')
    await render(hbs`{{slugify " keep the spaces " (hash trim=false)}}`)
    assert.dom().hasText('-keep-the-spaces-')
    await render(hbs`{{slugify "你好你怎么样 monsieur" (hash pinyin=true)}}`)
    assert.dom().hasText('ni-hao-ni-zen-me-yang-monsieur')
    await render(hbs`{{slugify "🇫🇷❤️🥖➕🍷" (hash emoji=true)}}`)
    assert.dom().hasText('flag-france-red-heart-baguette-bread-plus-wine-glass')
  })
})
