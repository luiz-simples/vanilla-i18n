const myFirstNameEn = 'myfirstname'.translate('en')
const myFirstNamePtBr = 'myfirstname'.translate('pt')
const myFirstNameDefault = 'myfirstname'.translate()
const street = 'address.street'.translate({
  streetname: 'wall street'
})

console.log({
  en: myFirstNameEn,
  pt: myFirstNamePtBr,
  default: myFirstNameDefault,
  street: street
})
