import slugify, { removeDiacritics } from 'dummy'
import { module, test } from 'qunit'

module('Unit | Utility | slug', function () {
  test('tests on removeDiacritics', function (assert) {
    assert.strictEqual(removeDiacritics(''), '')
    assert.strictEqual(removeDiacritics('é è à ù ç č Ž ñ'), 'e e a u c c Z n')
  })

  test('tests on slugify', function (assert) {
    assert.strictEqual(slugify(''), '')
    assert.strictEqual(slugify('bonjour'), 'bonjour')
    assert.strictEqual(slugify('annyǒng hashimnikka'), 'annyong-hashimnikka')
    assert.strictEqual(slugify('Bon jOuR Töi 1337   '), 'bon-jour-toi-1337')
    assert.strictEqual(
      slugify('你好你怎么样 monsieur'),
      'ni-hao-ni-zen-me-yang-monsieur'
    )
  })

  test('tests on slugify with options', function (assert) {
    assert.strictEqual(
      slugify('Bon jOuR Töi 1337', { separator: '#' }),
      'bon#jour#toi#1337'
    )
  })
})
