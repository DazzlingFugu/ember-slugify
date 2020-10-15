import simplePinyin from 'simple-pinyin'
import getSlug from 'speakingurl'
import unorm from 'unorm'

function removeDiacritics(str) {
  // eslint-disable-next-line
  return unorm.nfd(str).replace(/[\u0300-\u036f]/g, '');
}

export default function slugify(str, options = {}) {
  return getSlug(
    simplePinyin(removeDiacritics(str.split('_').join('-')), {
      pinyinOnly: false
    }).join(' '),
    options
  )
}

export { removeDiacritics, slugify }
