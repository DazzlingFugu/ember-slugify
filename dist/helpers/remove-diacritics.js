import { helper } from '@ember/component/helper';
import { removeDiacritics as removeDiacritics$1 } from 'ember-slugify';

function removeDiacriticsHelper(args) {
  let [string] = args;
  return removeDiacritics$1(string);
}
var removeDiacritics = helper(removeDiacriticsHelper);

export { removeDiacritics as default };
//# sourceMappingURL=remove-diacritics.js.map
