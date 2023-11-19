import { helper } from '@ember/component/helper'
import { removeDiacritics } from 'ember-slugify'

function removeDiacriticsHelper(args) {
  let [string] = args
  return removeDiacritics(string)
}

export default helper(removeDiacriticsHelper)
