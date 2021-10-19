import simplePinyin from 'simple-pinyin'
import getSlug from 'speakingurl'
import unorm from 'unorm'

function removeDiacritics(str) {
  // eslint-disable-next-line
  return unorm.nfd(str).replace(/[\u0300-\u036f]/g, '')
}

export default function slugify(str, options = {}) {
  return getSlug(
    simplePinyin(removeDiacritics(str.split('_').join('-')), {
      matchFullText: 'original',
    }).reduce((acc, b) => (b.length === 1 ? `${acc}${b}` : `${acc} ${b}`), ''),
    options
  )
}

export { removeDiacritics, slugify }
