import slugify, { removeDiacritics } from 'ember-slugify'
import { module, test } from 'qunit'

module('Unit | Utility | slug', function () {
  test('tests on removeDiacritics', function (assert) {
    assert.strictEqual(removeDiacritics(), '')
    assert.strictEqual(removeDiacritics(''), '')
    assert.strictEqual(removeDiacritics('é è à ù ç č Ž ñ'), 'e e a u c c Z n')
    assert.strictEqual(removeDiacritics('Le Théâtre'), 'Le Theatre')
  })

  test('tests on slugify', function (assert) {
    assert.strictEqual(slugify(), '')
    assert.strictEqual(slugify(''), '')
    assert.strictEqual(slugify('bonjour'), 'bonjour')
    assert.strictEqual(slugify('annyǒng hashimnikka'), 'annyong-hashimnikka')
    assert.strictEqual(
      slugify('Bon jOuR Töi 1337  : () ?  '),
      'bon-jour-toi-1337'
    )
    assert.strictEqual(slugify('I ♥ New York'), 'i-love-new-york')
  })

  test('tests on slugify with options', function (assert) {
    assert.strictEqual(
      slugify('Bon jOuR Töi 1337', { replacement: '#' }),
      'bon#jour#toi#1337'
    )
    assert.strictEqual(
      slugify('Bon jOuR Töi 1337', { lower: false }),
      'Bon-jOuR-Toi-1337'
    )
    assert.strictEqual(slugify("vive l'♥", { locale: 'fr' }), 'vive-lamour')
    assert.strictEqual(slugify("vive l'♥", { locale: 'fr-CA' }), 'vive-lamour')
    assert.strictEqual(slugify("vive l'♥", { locale: 'fr_CA' }), 'vive-lamour')
    assert.strictEqual(
      // the strict option is ignored on purpose
      slugify('Bon jOuR Töi 1337  : () ?  ', { strict: false }),
      'bon-jour-toi-1337'
    )
    assert.strictEqual(
      slugify(' keep the spaces ', { trim: false }),
      '-keep-the-spaces-'
    )
    assert.strictEqual(
      slugify('你好你怎么样 monsieur', { pinyin: true }),
      'ni-hao-ni-zen-me-yang-monsieur'
    )
    assert.strictEqual(
      slugify('🇫🇷❤️🥖➕🍷', { emoji: true }),
      'flag-france-red-heart-baguette-bread-plus-wine-glass'
    )
  })
})
