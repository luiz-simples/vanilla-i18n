vanilla-i18n
===============================
Translating text in a simple and easy way.

---------------------------------------------

## How to use?
```js
  // I18nPtBr.js
  const vanillaI18N, {setDefaultLanguage} = require('vanilla-i18n')

  vanillaI18N({
    'myfirstname': 'Agrupador',
    'mymiddlename': 'Opção de resposta',
    'mylastname': 'Opção única',
    'myfullname': 'Opções múltiplas',
    'othen i18n': 'Área de texto',
    'somebody text': 'Texto resumido'
  }, 'pt')

  setDefaultLanguage('pt')
```

```js
  // I18nEn.js
  const vanillaI18N = require('vanilla-i18n')

  vanillaI18N({
    'myfirstname': 'My First name',
    'mymiddlename': 'My middle name',
    'mylastname': 'My Last name',
    'myfullname': 'My full name',
    'other i18n': 'Other translation',
    'somebody text': 'Other somebody texto'
  }, 'en')
```

```js
  // code.js
  const myFirstNameEn = 'myfirstname'.translate('en')
  const myFirstNamePtBr = 'myfirstname'.translate('pt')
  const myFirstNameDefault = 'myfirstname'.translate()
  console.log({
    en: myFirstNameEn,
    pt: myFirstNamePtBr,
    default: myFirstNameDefault
  })
```

```js
  // main.js
  require('./I18nEn')
  require('./I18nPtBr')
  require('./code.js')
```
