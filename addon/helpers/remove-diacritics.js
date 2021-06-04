import { helper } from '@ember/component/helper'
import { removeDiacritics as removeDiacriticsFunction } from 'ember-slugify'

function removeDiacritics(args) {
  let [string] = args
  return removeDiacriticsFunction(string)
}

export default helper(removeDiacritics)
