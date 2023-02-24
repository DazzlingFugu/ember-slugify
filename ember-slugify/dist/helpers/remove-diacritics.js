import { helper } from '@ember/component/helper';
import { removeDiacritics as removeDiacritics$2 } from '../index.js';

function removeDiacritics(args) {
  let [string] = args;
  return removeDiacritics$2(string);
}
var removeDiacritics$1 = helper(removeDiacritics);

export { removeDiacritics$1 as default };
//# sourceMappingURL=remove-diacritics.js.map
