import slugify, { removeDiacritics } from 'dummy'
import { module, test } from 'qunit'

module('Unit | Utility | slug', function () {
  test('tests on removeDiacritics', (assert) => {
    assert.equal(removeDiacritics(''), '')
    assert.equal(removeDiacritics('é è à ù ç č Ž ñ'), 'e e a u c c Z n')
  })

  test('tests on slugify', (assert) => {
    assert.equal(slugify(''), '')
    assert.equal(slugify('bonjour'), 'bonjour')
    assert.equal(slugify('annyǒng hashimnikka'), 'annyong-hashimnikka')
    assert.equal(slugify('Bon jOuR Töi 1337   '), 'bon-jour-toi-1337')
    assert.equal(
      slugify('你好你怎么样 monsieur'),
      'ni-hao-ni-zen-me-yang-monsieur'
    )
  })

  test('tests on slugify with options', (assert) => {
    assert.equal(
      slugify('Bon jOuR Töi 1337', { separator: '#' }),
      'bon#jour#toi#1337'
    )
  })
})
