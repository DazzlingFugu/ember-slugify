import { helper } from '@ember/component/helper'
import { removeDiacritics } from '../index'

function removeDiacriticsHelper(args) {
  let [string] = args
  return removeDiacritics(string)
}

export default helper(removeDiacriticsHelper)
