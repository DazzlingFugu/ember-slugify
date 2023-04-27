import { helper } from '@ember/component/helper'
import { slugify as slugifyFunction } from '../index'

const AVAILABLE_OPTIONS = [
  'replacement', // replace spaces with replacement character (string)
  'remove', // remove characters that match regex (regexp)
  'lower', // convert to lower case (boolean)
  'locale', //language code of the locale to use (string)
  'trim', // trim leading and trailing replacement chars (boolean)
  'pinyin', // replace chinese by latin character following the pinyin method (boolean)
  'emoji', // replace unicode emoji by it's description (boolean)
]

function slugify(args) {
  let [string, options] = args
  let opts = {}
  if (options) {
    AVAILABLE_OPTIONS.forEach((key) => {
      if (options[key] !== undefined) {
        opts[key] = options[key]
      }
    })
  }
  return slugifyFunction(string, opts)
}

export default helper(slugify)
