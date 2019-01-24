# ember-slugify

[![CircleCI](https://circleci.com/gh/peopledoc/ember-slugify.svg?style=shield&circle-token=106b80d7153b94e6ee96541d1647d8e3984862cd)](https://circleci.com/gh/peopledoc/ember-slugify)

Library to slugify your strings within Ember.

## Compatibility

- Ember.js v2.18 or above
- Ember CLI v2.13 or above

## Installation

```
ember install ember-slugify
```

## Usage

```js
import slugify, { removeDiacritics } from 'ember-slugify/utils/slug'

let slug = slugify('你好你怎么样 monsieur') // ni-hao-ni-zen-me-yang-monsieur
let noDiacritics = removeDiacritics('Théâtre') // Theatre
```

## License

This project is licensed under the [MIT License](LICENSE.md).
