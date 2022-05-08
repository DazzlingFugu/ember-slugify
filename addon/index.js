import * as slugfyFunction from 'slugify'
import simplePinyin from 'simple-pinyin'
import emoji from 'emoji.json'

const UNWANTED_OPTIONS = [
  'strict', // strip special characters except replacement (boolean)
]

function removeDiacritics(str = '') {
  return str.normalize('NFKD').replace(/[\u0300-\u036F]/g, '')
}

function _parseLocale(_locale) {
  if (_locale && typeof _locale === 'string') {
    if (_locale.includes('-')) {
      return _locale.split('-')[0]
    }
    if (_locale.includes('_')) {
      return _locale.split('_')[0]
    }
  }
  return _locale
}

export default function slugify(str = '', options = {}) {
  UNWANTED_OPTIONS.forEach((key) => {
    if (options[key] !== undefined) {
      delete options[key]
    }
  })
  let locale = _parseLocale(options.locale)
  let result = removeDiacritics(str)
  if (options.pinyin) {
    result = simplePinyin(result, {
      matchFullText: 'original',
    }).reduce((acc, b) => (b.length === 1 ? `${acc}${b}` : `${acc} ${b}`), '')
  }
  if (options.emoji) {
    emoji.forEach((emoji) => {
      result = result.replaceAll(emoji.char, ` ${emoji.name} `)
    })
  }
  return slugfyFunction(
    result,
    Object.assign(
      {
        replacement: '-',
        lower: true,
        strict: true,
        locale: undefined,
        trim: true,
        pinyin: false,
        emoji: false,
      },
      options,
      {
        locale,
      }
    )
  )
}

export { removeDiacritics, slugify }
