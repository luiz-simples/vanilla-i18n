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

i18n.setTranslate({
  'myfirstname': 'My First name',
  'mymiddlename': 'My middle name',
  'mylastname': 'My Last name',
  'myfullname': 'My full name',
  'other i18n': 'Other translation',
  'somebody text': 'Other somebody texto'
}, 'en')

const myFirstNameEn = 'myfirstname'.translate('en')
const myFirstNamePtBr = 'myfirstname'.translate('pt')
const myFirstNameDefault = 'myfirstname'.translate()

console.log({
  en: myFirstNameEn,
  pt: myFirstNamePtBr,
  default: myFirstNameDefault
})
