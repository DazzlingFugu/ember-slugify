import { helper } from '@ember/component/helper'
import { slugify } from '../index'

const AVAILABLE_OPTIONS = [
  'replacement', // replace spaces with replacement character (string)
  'remove', // remove characters that match regex (regexp)
  'lower', // convert to lower case (boolean)
  'locale', //language code of the locale to use (string)
  'trim', // trim leading and trailing replacement chars (boolean)
  'pinyin', // replace chinese by latin character following the pinyin method (boolean)
  'emoji', // replace unicode emoji by it's description (boolean)
]

function slugifyHelper(args) {
  let [string, options] = args
  let opts = {}
  if (options) {
    AVAILABLE_OPTIONS.forEach((key) => {
      if (options[key] !== undefined) {
        opts[key] = options[key]
      }
    })
  }
  return slugify(string, opts)
}

export default helper(slugifyHelper)
