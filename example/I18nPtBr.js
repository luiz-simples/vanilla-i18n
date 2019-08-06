const i18n = require('../dist/vanilla-i18n')

i18n.setTranslate({
  myfirstname: 'Agrupador',
  mymiddlename: 'Opção de resposta',
  mylastname: 'Opção única',
  myfullname: 'Opções múltiplas',
  address: {
    street: '{ streetname } é minha rua'
  },
  'othen i18n': 'Área de texto',
  'somebody text': 'Texto resumido'
}, 'pt')

i18n.setDefaultLanguage('pt')
