import slugify from 'slugify';
import simplePinyin from 'simple-pinyin';
import emoji from 'emoji.json';

const UNWANTED_OPTIONS = ['strict' // strip special characters except replacement (boolean)
];

function removeDiacritics(str = '') {
  return str.normalize('NFKD').replace(/[\u0300-\u036F]/g, '');
}
function _parseLocale(locale) {
  if (typeof locale !== 'string') {
    return;
  }
  if (locale.includes('-')) {
    return locale.split('-')[0];
  }
  if (locale.includes('_')) {
    return locale.split('_')[0];
  }
  return locale;
}
function slugifyFunction(str = '', options = {}) {
  UNWANTED_OPTIONS.forEach(key => {
    if (options[key] !== undefined) {
      delete options[key];
    }
  });
  let locale = _parseLocale(options.locale);
  let result = removeDiacritics(str);
  if (options.pinyin) {
    result = simplePinyin(result, {
      matchFullText: 'original'
    }).reduce((acc, b) => b.length === 1 ? `${acc}${b}` : `${acc} ${b}`, '');
  }
  if (options.emoji) {
    emoji.forEach(emoji => {
      result = result.replaceAll(emoji.char, ` ${emoji.name} `);
    });
  }
  return slugify(result, Object.assign({
    replacement: '-',
    lower: true,
    strict: true,
    locale: undefined,
    trim: true,
    pinyin: false,
    emoji: false
  }, options, {
    locale
  }));
}

export { slugifyFunction as default, removeDiacritics, slugifyFunction as slugify };
//# sourceMappingURL=index.js.map
