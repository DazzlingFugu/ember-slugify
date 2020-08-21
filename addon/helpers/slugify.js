import { helper } from '@ember/component/helper'
import { slugify as slugfyFunction } from 'ember-slugify'

function slugify(args) {
  let [string] = args
  return slugfyFunction(string)
}

export default helper(slugify)
