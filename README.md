vanilla-i18n
===============================
Translating text in a simple and easy way.

---------------------------------------------

## How to use?
```js
  // I18nPtBr.js
  const i18n = require('./vanilla-i18n')

  i18n.setTranslate({
    'myfirstname': 'Agrupador',
    'mymiddlename': 'Opção de resposta',
    'mylastname': 'Opção única',
    'myfullname': 'Opções múltiplas',
    'othen i18n': 'Área de texto',
    'somebody text': 'Texto resumido'
  }, 'pt')

  i18n.setDefaultLanguage('pt')
```

```js
  // I18nEn.js
  const i18n = require('./vanilla-i18n')

  i18n.setTranslate({
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

using nested objects

```
  i18n.setTranslate({
    'name': {
      firstname: 'my first name',
      middlename: 'my middle name',
      lastname: 'my last name'
    },
    'other i18n': 'Other translation',
    'somebody text': 'Other somebody texto'
  }, 'en')

  'name.firstname'.translate()
  'name.middlename'.translate()
  'name.lastname'.translate()
```

using placeholders and passing values to translate function

```
  i18n.setTranslate({
    'name': {
      firstname: '{firstname} is my first name',
      middlename: 'my middle name',
      lastname: 'my last name'
    },
    'other i18n': 'Other translation',
    'somebody text': 'Other somebody texto'
  }, 'en')

  'name.firstname'.translate({firstname: 'George'})
```

passing language along with the parameters

```
'name.firstname'.translate('pt',{firstname: 'George'})
```
