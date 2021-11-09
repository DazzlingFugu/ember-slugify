# ember-slugify

[![CI](https://github.com/peopledoc/ember-slugify/actions/workflows/ci.yml/badge.svg)](https://github.com/peopledoc/ember-slugify/actions/workflows/ci.yml) [![Ember Observer Score](https://emberobserver.com/badges/ember-slugify.svg)](https://emberobserver.com/addons/ember-slugify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Library to slugify your strings within Ember.

This library uses:

- [speakingurl](https://pid.github.io/speakingurl/)
- [simple-pinyin](https://github.com/xuqingkuang/simple-pinyin)


## Compatibility

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above

## Installation

```
ember install ember-slugify
```

## Usage

### In a `js` file

```js
import slugify, { removeDiacritics } from 'ember-slugify';

let slug = slugify('你好你怎么样 monsieur'); // ni-hao-ni-zen-me-yang-monsieur

let options = { separator: '#' }); // options for speakingurl
let slug = slugify('你好你怎么样 monsieur', options); // ni#hao#ni#zen#me#yang#monsieur

let noDiacritics = removeDiacritics('Théâtre'); // Theatre
let slug = slugify('Théâtre'); // theatre
```

### In a template

```hbs
await render(hbs`{{slugify '你好你怎么样 monsieur'}}`)
await render(hbs`{{remove-diacritics 'Théâtre'}}`)
```

The separator option is not available on `slugify` helper.

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
        <a href="https://github.com/BlueCutOfficial">
            <img src="https://avatars.githubusercontent.com/u/22059380?v=4" width="100;" alt="BlueCutOfficial"/>
            <br />
            <sub><b>BlueCutOfficial</b></sub>
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
        <a href="https://github.com/mathieupoteriepeopledoc">
            <img src="https://avatars.githubusercontent.com/u/40787872?v=4" width="100;" alt="mathieupoteriepeopledoc"/>
            <br />
            <sub><b>mathieupoteriepeopledoc</b></sub>
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
