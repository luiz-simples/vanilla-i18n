const i18n = require('../dist/vanilla-i18n')

i18n.setTranslate({
  myfirstname: 'My First name',
  mymiddlename: 'My middle name',
  mylastname: 'My Last name',
  myfullname: 'My full name',
  address: {
    street: '{ streetname } is my street'
  },
  'other i18n': 'Other translation',
  'somebody text': 'Other somebody texto'
}, 'en')
