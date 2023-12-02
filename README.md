# ember-slugify

[![CI](https://github.com/DazzlingFugu/ember-slugify/actions/workflows/ci.yml/badge.svg)](https://github.com/DazzlingFugu/ember-slugify/actions/workflows/ci.yml) [![Ember Observer Score](https://emberobserver.com/badges/ember-slugify.svg)](https://emberobserver.com/addons/ember-slugify) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Library to slugify your strings within Ember.

This library uses:

- [slugify](https://github.com/simov/slugify)
- [simple-pinyin](https://github.com/xuqingkuang/simple-pinyin)
- [emoji.json](https://github.com/amio/emoji.json)

## Compatibility

- Ember.js v4.8 or above
- Embroider or ember-auto-import v2

## Installation

```
ember install ember-slugify
```

## Usage

### In a `js` file

```js
import slugify, { removeDiacritics } from 'ember-slugify'

let slug = slugify('Le Théâtre')
// le-theatre

slug = slugify('I ♥ New York')
// i-love-new-york

slug = slugify("Vive l'♥", { locale: 'fr' })
// vive-lamour

slug = slugify('bonjour monsieur', { replacement: '#' })
// bonjour#monsieur

slug = slugify('你好你怎么样 monsieur', { pinyin: true })
// ni-hao-ni-zen-me-yang-monsieur

slug = slugify('🇫🇷❤️🥖➕🍷', { emoji: true })
// flag-france-red-heart-baguette-bread-plus-wine-glass

let noDiacritics = removeDiacritics('Le Théâtre')
// Le Theatre
```

### In a template

```hbs
{{slugify 'Le Théâtre'}}

{{slugify '你好你怎么样 monsieur' (hash pinyin=true)}}

{{slugify '🇫🇷❤️🥖➕🍷' (hash emoji=true)}}

{{remove-diacritics 'Le Théâtre'}}
```

The separator option is not available on `slugify` helper.

### Options

| name        | description                                                    | default value |
| ----------- | -------------------------------------------------------------- | ------------- |
| replacement | replace spaces with replacement character                      | `'-'`         |
| lower       | convert to lower case                                          | `true`        |
| locale      | language code of the locale to use                             | `undefined`   |
| trim        | trim leading and trailing replacement chars                    | `true`        |
| pinyin      | replace chinese by latin character following the pinyin method | `false`       |
| emoji       | replace unicode emoji by it's description                      | `false`       |

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## Contributors

<!-- readme: contributors,ember-tomster/- -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/MrChocolatine">
            <img src="https://avatars.githubusercontent.com/u/47531779?v=4" width="100;" alt="MrChocolatine"/>
            <br />
            <sub><b>MrChocolatine</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/GreatWizard">
            <img src="https://avatars.githubusercontent.com/u/1322081?v=4" width="100;" alt="GreatWizard"/>
            <br />
            <sub><b>GreatWizard</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/saintsebastian">
            <img src="https://avatars.githubusercontent.com/u/8288415?v=4" width="100;" alt="saintsebastian"/>
            <br />
            <sub><b>saintsebastian</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/BlueCutOfficial">
            <img src="https://avatars.githubusercontent.com/u/22059380?v=4" width="100;" alt="BlueCutOfficial"/>
            <br />
            <sub><b>BlueCutOfficial</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/mathieupoteriepeopledoc">
            <img src="https://avatars.githubusercontent.com/u/40787872?v=4" width="100;" alt="mathieupoteriepeopledoc"/>
            <br />
            <sub><b>mathieupoteriepeopledoc</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/romgere">
            <img src="https://avatars.githubusercontent.com/u/13900970?v=4" width="100;" alt="romgere"/>
            <br />
            <sub><b>romgere</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/ndekeister-us">
            <img src="https://avatars.githubusercontent.com/u/56396753?v=4" width="100;" alt="ndekeister-us"/>
            <br />
            <sub><b>ndekeister-us</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/xcambar">
            <img src="https://avatars.githubusercontent.com/u/657654?v=4" width="100;" alt="xcambar"/>
            <br />
            <sub><b>xcambar</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: contributors,ember-tomster/- -end -->

## License

This project is licensed under the [MIT License](LICENSE.md).
