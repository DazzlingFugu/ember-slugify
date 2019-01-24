import simplePinyin from 'simple-pinyin'
import getSlug from 'speakingurl'

function removeDiacritics(str) {
  // eslint-disable-next-line
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default function slugify(str) {
  return getSlug(
    simplePinyin(removeDiacritics(str.split('_').join('-')), {
      pinyinOnly: false
    }).join(' ')
  )
}

export { removeDiacritics, slugify }
