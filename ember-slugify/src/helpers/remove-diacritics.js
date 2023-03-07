import { helper } from '@ember/component/helper'
import { removeDiacritics as removeDiacriticsFunction } from '../index'

function removeDiacritics(args) {
  let [string] = args
  return removeDiacriticsFunction(string)
}

export default helper(removeDiacritics)
